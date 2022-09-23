var inputElement=document.querySelector('#input-text');
var redButton=document.querySelector('#red');
var greenButton=document.querySelector('#green');
var blueButton=document.querySelector('#blue');
var outputElement=document.querySelector('#output');


function isRed()
{
    var redText=document.getElementById('input-text').style.color='red';
}
function isGreen()
{
    var greenText=document.getElementById('input-text').style.color='green';
}
function isBlue()
{
    var blueText=document.getElementById('input-text').style.color='blue';
}


redButton.addEventListener('click',isRed);
greenButton.addEventListener('click',isGreen);
blueButton.addEventListener('click',isBlue);
