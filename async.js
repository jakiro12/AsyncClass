let onlyNames='leonardo'

function hisName(){
    console.log(onlyNames)
}
function sayName(){
    setTimeout(function hi(){
        console.log(`hola ${onlyNames}`)
    },2000)
    
}

let promesa=new Promise((res,rej)=>{
    let obj={
        name:'lauta'
    }
    res(obj)
})
promesa.then((res)=>{
   // console.log(res)
})


