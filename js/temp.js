//generate random password
function generate(){
    
    //set password length and complexity per user
    let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*-=_+?><";

    let password = "";

    //create a loop to go through passwor values

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox
    document.getElementById("display").value = password;}

//default length dispay of 25

document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider position

document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
       document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }

    else{
       document.getElementById("length").innerHTML = "Length: 1";
    }

}

// function to copy to clipboard

function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    window.alert("Password copied to clipboard");
}
