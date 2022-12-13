let myBtn= document.querySelector('button')

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