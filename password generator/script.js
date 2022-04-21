let possibleValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "&", "*", "?", ",", "|", "+", "-"];

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let password3El = document.getElementById("password3-el");
let password4El = document.getElementById("password4-el");

function getrandomValue() {
    let rand = Math.floor(Math.random() * 74);
    return possibleValues[rand];
}

function getpassword() {
    let randpassword = "";
    let randomValue = " ";
    for (let i = 0; i < 6; i++) {
        randomValue = getrandomValue();
        randpassword += randomValue;
    }
    return randpassword;
}

function generatePassword() {
    let password1 = getpassword();
    let password2 = getpassword();
    let password3 = getpassword();
    let password4 = getpassword();

    password1El.textContent = password1;
    password2El.textContent = password2;
    password3El.textContent = password3;
    password4El.textContent = password4;
}