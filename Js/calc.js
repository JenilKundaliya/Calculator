let screenValue = '';
let screen = document.getElementById('value');
let digits = document.getElementsByClassName('digits');
let buttonText = '';
// console.log(digits)
for(let i=0;i<digits.length;i++){
digits[i].addEventListener('click',function(){
    screen.style.color = 'blue'
buttonText = this.innerText;
// console.log(buttonText)
if(screenValue == '0'){
    screenValue = buttonText;
    screen.innerText = screenValue;
}
else{

    screenValue += buttonText;
    console.log(screenValue);
    screen.innerText = screenValue;
}
});
}

//Targetting operator
let operator = document.getElementsByClassName('operator');
for(let i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        screen.style.color = 'crimson'
    buttonText = this.innerText;
    // console.log(buttonText)
    screenValue += buttonText;
    console.log(screenValue);
    screen.innerText = screenValue;
    });
    }
// Targetting Clear and equals to.......
let clear = document.getElementById('clear');
clear.addEventListener('click',function(){
    screenValue = '0';
    screen.innerText = screenValue;
});


let equals = document.getElementById('equals');
equals.addEventListener('click',function(){
 
    screen.innerText =    eval(screenValue);
    screenValue = '';
    screen.style.color = 'black'
})