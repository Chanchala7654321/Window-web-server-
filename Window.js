
// Get references to the sections
let calculator = document.getElementById("calculator");
let notes = document.getElementById("notes");
let clock = document.getElementById("clock");

// Hide all sections at the start
calculator.style.display = "none";
notes.style.display = "none";
clock.style.display = "none";

// Function to display the calculator
function createCalculator() {
    calculator.style.display = "block";
    notes.style.display = "none";
    clock.style.display = "none";
}

// Function to display the clock
function createClock() {
    clock.style.display = "block";
    calculator.style.display = "none";
    notes.style.display = "none";
}

// Function to display the notepad
function createNotepad() {
    notes.style.display = "block";
    calculator.style.display = "none";
    clock.style.display = "none";
}










function toggleApp(appId) {
    document.querySelectorAll('.button').forEach(button => {
        button.style.display = "none";
    });
    document.getElementById(appId).style.display = "block";
}

let calInput = document.getElementById("inputbox");

function append(value) {
    calInput.value += value;
}

function clearInput() {
    calInput.value = "";
}

function deleteLast() {
    calInput.value = calInput.value.slice(0, -1);
}

function calculate() {
    try {
        calInput.value = eval(calInput.value);
    } catch {
        calInput.value = "Error";
    }
}

document.addEventListener("keydown", function (event) {
    let key = event.key;

    let calculator = document.getElementById("calculator");
    if (calculator.style.display !== "block") return;

    if (!isNaN(key) || ["+", "-", "*", "/", "%", "."].includes(key)) {
        append(key);
    } else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearInput();
    }
});












let hour = document.getElementById("hour");
let munite = document.getElementById("munite");
let second = document.getElementById("second");
let ampm = document.getElementById("ampm");



function myFun() {
    let now = new Date();
    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();
    let AMPM = "AM";

    if (hh >= 12) {
        AMPM = "PM";
        if (hh > 12) {
            hh = hh - 12;
        }
    }
    if (hh === 0) {
        hh = 12;
    }

    // format hours
    if (hh < 10) {
        hh = "0" + hh;
    }

    // format minutes
    if (mm < 10) {
        mm = "0" + mm;
    }

    // format seconds
    if (ss < 10) {
        ss = "0" + ss;
    }

    hour.innerText = hh + ":";
    munite.innerText = mm + ":";
    second.innerText = ss;
    ampm.innerText = AMPM;
}

setInterval(myFun, 1000);
myFun();














let newTask = document.getElementById("newTaskBtn");
newTask.style.display = "none";
function newaddTask() {
    // alert("Hello!");

    newTask.style.display = "block";
}

function cutdiv() {
    newTask.style.display = "none";
}

function saveNote() {
    alert("Successfuly Saved!");
}








