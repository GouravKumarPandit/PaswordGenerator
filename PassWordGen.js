let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbol = "!@#%^&*+-/?";

let uppCase = document.getElementById('upperCase');
let lowCase = document.getElementById('lowerCase');
let num = document.getElementById('number');
let sym = document.getElementById('symbol');

let password = "";
let sizeBox = document.getElementById('szBox'); 

function generatePassword(password){
    if(uppCase.checked){
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if(lowCase.checked){
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if(num.checked){
        password += number[Math.floor(Math.random() * number.length)];
    }
    if(sym.checked){
        password += symbol[Math.floor(Math.random() * symbol.length)]
    }

    let length = sizeBox.value;
    if(password.length < length){
        return generatePassword(password);
    }

    password = password.substring(0,length);
    let showPass = document.getElementById('showPass');
    showPass.value = password;
}

let getBtn = document.getElementById('genrateBtn');
getBtn.addEventListener('click', ()=>{
    generatePassword(password);
});