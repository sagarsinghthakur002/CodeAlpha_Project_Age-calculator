let userInput = document.getElementById("data");
userInput.max = new Date().toISOString().split("T")[0]; //to block the selection of future date
let result = document.getElementById("result");
let Btn = document.getElementById("button");

function calculateAge() {
    let birthDate = new Date(userInput.value); // user birth of date 

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date(); //current date

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3; // result 

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--; // we decreases 1 year 
        m3 = m2 - m1 + 12; // for borrowing 1 year . eg: m3 = m2 - m1 + 12 = 3 - 5 + 12 = 10 months

    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1; // current year current month ani day chaii aile ko ani bd ko date - gare rw bakii date nikare 
    }

    result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old`;
}

function getDaysInMonth(year, month) { //helps to find out how many days are in a specific month of a specific year.
    return new Date(year, month, 0).getDate(); //date with the day set to 0, we get the last day of the previous month. For example, new Date(2024, 2, 0) actually gives us February 29, 2024 (the last day of February 2024). 
    
}

Btn.addEventListener("click", () => {
    calculateAge();
});