var inputElement=document.querySelector('#input-text');
var redButton=document.querySelector('#red');
var greenButton=document.querySelector('#green');
var blueButton=document.querySelector('#blue');
var outputElement=document.querySelector('#output');


function isRed()
{
    var redText=outputElement.style.color='red';
}
function isGreen()
{
    var greenText=outputElement.style.color='green';
}
function isBlue()
{
    var blueText=outputElement.style.color='blue';
}
function showOp()
{
    var output=document.getElementById('input-text').style
    outputElement.innerText=inputElement.value;
}
inputElement.addEventListener('input',showOp);


redButton.addEventListener('click',isRed);
greenButton.addEventListener('click',isGreen);
blueButton.addEventListener('click',isBlue);
