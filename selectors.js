let myBtn= document.querySelector('button')
let myBtn2 =document.querySelector('.sumar')
function suma(){
    let num1=15
    let num2= 17
    console.log(num1 + num2)
}

myBtn.onclick= function(){
    let myBody=document.querySelector('body')
    myBody.style.background='blue'
}
let textBox = document.getElementById('message');

textBox.addEventListener('keydown', (event) => {
    console.log(`key=${event.key},code=${event.code}`);
     })

let myDiv=document.querySelector('.key')

myDiv.addEventListener('mouseover',function(){
    myDiv.style.background='red'
})