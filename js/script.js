//WALKTH

//Onclick of Generate Button window.prompt 4 questions. 

    // THIS IS FUNCTION #1 (PURPOSE:  GATHER REQUIREMENTS)
    // 1. How many characters does the password need to be, set minimum and maximum (8,25), type = number 
    //          a. if input is acceptable -> (STORE THE VALUE IN A VARIABLE) -> question 2 (@2.)var = charNum
    //          b. if input is not acceptable -> prompt "invalid input of some sort"
    // 2. Does it require symbols?  (Yes/No) -> (STORE THE VALUE IN A VARIABLE) -> question 3 var = symbolsUser 
    // 3. Does it require lowercase (Yes/No) -> (STORE THE VALUE IN A VARIABLE) -> question 4 var = lowCaseUser
    // 4. Does it require uppercase  (Yes/No) -> (STORE THE VALUE IN A VARIABLE) var = upCaseUser

    // THIS IS FUNCTION #2 (PURPOSE:  GENERATE THE PASSWORD BASED ON REQUIREMENTS)
    // 1. Take the VALID answer from question 1 and the various answers from questions 2,3,4 and generate a password 
    // 2. Display the password in the display window
    

    // THIS IS FUNCTION #3  (PURPOSE: COPY TO CLIPBOARD)
    // 1. Execute the ability to copy the password to keyboard


//This block of code takes care of gathering the info needed to generate the password


const genButton = document.querySelector('#genButton');

let needUpCase = [];
let chosenLength = [];
let needSymbols = [];
let needNumbers = [];
let needLowCase = [];
let chars = [];
let passwordFinal=[1];
let pw = [];
let password = "";
let symbols = "!@#$%^~`&*()-=_+|}{?<>";
let lowCase = "abcedfghijklmnopqrstuvwxyz";
let upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = '1234567890';


//This block of code asks the questions and processes the responses to create the password

function questions(){
    chosenLength = window.prompt("How many characters does your password require?  Min. 8 Max 128");
    if(chosenLength >=8 && chosenLength <=128){
        needSymbols = window.confirm("Does your password require symbols?");
        needNumbers = window.confirm("Does your password need numbers?");
        needLowCase = window.confirm("Does your password require lowercase letters?");
        needUpCase = window.confirm("Does your password require uppercase letters?");
        passwordFinal=[];
        chars=[];
            if (needSymbols === true) {
                chars.push(symbols);
            }
            if (needNumbers === true) {
                chars.push(upCase);
            }
            if (needLowCase === true) {
                chars.push(lowCase);
            }
            if (needUpCase === true) {
                chars.push(upCase);
            }
        for (let i = 0; i < chosenLength; i++){
            let genNum = Math.floor(Math.random() * Math.floor(chars.length));
            passwordFinal.push(chars[genNum][Math.floor(Math.random() * Math.floor(chars[genNum].length - 1))])
        }
        passwordFinal = passwordFinal.join('');
    } else{
       window.alert("Invalid - Password length must be between 8 and 128 characters.")
        questions()
    }
    document.getElementById("passwordDisplay").value = passwordFinal;
}

genButton.addEventListener('click', questions)


//This block of code copies the final password to the clipboard


function copyPassword(){

    document.getElementById("passwordDisplay").select();

    document.execCommand("copy");

    alert(passwordFinal + "  This password has been copied to keyboard");
  }
