/*
 
    *********** IMPLEMENT ***********

    Design - Elaborate a beutiful UI
    Functional - Show the month/week of every birthday
    Design - Add a title (h1) to the page
    Design - Add an explanation about the project
    Add an reflection phrease
    Put numbers in the collumns
    Mark the lived weeks/months using an "X"
    Show user data: year of death, total of days, weeks and months / birthday, lived days, weeks and months
    Use hover to show the month/week
    Phases of life
    Save option
    Print option

*/

var calendarTitle;
var controls = document.querySelector("#controls");
var birthday = document.querySelector("#birthday");
var finalAge = document.querySelector("#finalAge");
var typeOfCalendar = document.querySelector("#typeOfCalendar");
var createCalendar = document.querySelector("#createCalendar");
var containerMonth = document.querySelector("#containerMonth");
var containerWeek = document.querySelector("#containerWeek");

function generateCalendar() {
    controls.style.display = "none";
    if (typeOfCalendar.value == "month") {
        var divsCounter = 1;
        for (let i = 0; i < getUserLifeExpectancy(); i++) {
            var newDiv = document.createElement("div");
            containerMonth.appendChild(newDiv);
            newDiv.classList.add("month");
            if (divsCounter < 12) {
                divsCounter++;
            } else {
                var newBreak = document.createElement("br");
                containerMonth.appendChild(newBreak);
                divsCounter = 1;
            }
        }
    } else if (typeOfCalendar.value == "week") {
        var divsCounter = 1;
        for (let i = 0; i < getUserLifeExpectancy(); i++) {
            var newDiv = document.createElement("div");
            containerWeek.appendChild(newDiv);
            newDiv.classList.add("week");
            if (divsCounter < 52) {
                divsCounter++;
            } else {
                var newBreak = document.createElement("br");
                containerWeek.appendChild(newBreak);
                divsCounter = 1;
            }
        }
    }
    paintDivs();
}

function getUserAge() {
    var birthdayValue = birthday.value.split("-");
    // Birth date
    var dob = new Date(birthdayValue);
    var dobYear = dob.getYear();  
    var dobMonth = dob.getMonth() + 1;  
    var dobDay = dob.getDate();  
    // Current date
    var currentTime = new Date();
    var currentTimeYear = currentTime.getYear();  
    var currentTimeMonth = currentTime.getMonth() + 1;  
    var currentTimeDay = currentTime.getDate();

    // Get years
    var yearAge = currentTimeYear - dobYear;
    // Get months
    if (currentTimeMonth >= dobMonth)  {
        var monthAge = currentTimeMonth - dobMonth;  
    } else {  
        yearAge--;  
        var monthAge = 12 + currentTimeMonth - dobMonth;  
    }
    // Get days
    if (currentTimeDay >= dobDay) {
        var dayAge = currentTimeDay - dobDay;
    } else {
        monthAge--;
        var dayAge = 31 + currentTimeDay - dobDay;
    }

    if (typeOfCalendar.value == "month") { // Returns the number of months lived
        //console.log("Número de meses vividos: " + (yearAge * 12 + monthAge));
        return yearAge * 12 + monthAge;
    } else if (typeOfCalendar.value == "week") { // Returns the number of weeks lived
        //console.log("Número de semanas vividas: " + parseInt((parseInt(yearAge * 365) + parseInt(monthAge * 31) + parseInt(dayAge) + parseInt(yearAge / 4)) / 7));
        return parseInt((parseInt(yearAge * 365) + parseInt(monthAge * 31) + parseInt(dayAge) + parseInt(yearAge / 4)) / 7);
    }
}

function getUserLifeExpectancy() {
    if (typeOfCalendar.value == "month") { // Returns total of months in life
        //console.log("Número total de meses na vida: " + (finalAge.value * 12));
        return finalAge.value * 12;
    } else if (typeOfCalendar.value == "week") { // Returns the total number or weeks in life
        //console.log("Número total de semanas na vida: " + parseInt((parseInt(finalAge.value * 365) + parseInt(finalAge.value/4)) / 7));
        return parseInt((parseInt(finalAge.value * 365) + parseInt(finalAge.value/4)) / 7);
    }
}

function paintDivs() {
    if (typeOfCalendar.value == "month") {
        var monthsLivedCounter = 0;
        for (let i = 0; i < getUserAge(); i++) {
            var monthLived = document.getElementsByClassName("month");
            monthLived[monthsLivedCounter].classList.add("monthLived");
            monthsLivedCounter++;
        }
        monthLived[getUserAge()].classList.add("weAreHere");
    } else if (typeOfCalendar.value == "week") {
        var weeksLivedCounter = 0;
        for (let i = 0; i < getUserAge(); i++) {
            var weekLived = document.getElementsByClassName("week");
            weekLived[weeksLivedCounter].classList.add("weekLived");
            weeksLivedCounter++;
        }
        weekLived[getUserAge()].classList.add("weAreHere");
    }
}

createCalendar.onclick = generateCalendar;
