let num1 = 0
let num2 = 0

let homeText = document.getElementById("homeScore")
let guestText = document.getElementById("guestScore")

homeText.textContent = num1
guestText.textContent = num2

function add1Guest(){
    num2 += 1
    guestText.textContent = num2
}

function add2Guest(){
    num2 += 2
    guestText.textContent = num2
}

function add3Guest(){
    num2 += 3
    guestText.textContent = num2
}


//Home Score increments
function add1Home(){
    num1 += 1
    homeText.textContent = num1
}

function add2Home(){
    num1 += 2
    homeText.textContent = num1
}

function add3Home(){
    num1 += 3
    homeText.textContent = num1
}

function resetScores() {
    num1 = 0;
    num2 = 0;
    homeText.textContent = num1;
    guestText.textContent = num2;
}