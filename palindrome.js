const text = document.querySelector(".box");
const button = document.querySelector(".press");
const check = document.querySelector("#ans");

function btn(){
    msg = text.value;
    msg = msg.toLowerCase();
    if(msg == ""){
        alert("Enter any text in box !!!!!");
    }else{
        if(msg == reverseString(msg)){
            check.innerHTML = "It's palindrome";
            document.getElementById("ans").style.border = "4px solid #2cef2c";
        }else{
            check.innerHTML = "It's not palindrome";
            document.getElementById("ans").style.border = "4px solid red";
        }
    }
}

function reverseString(str) {
    let splitstring = str.split("");
    let reversearray = splitstring.reverse();
    let joinarray = reversearray.join("");
    return joinarray;
}