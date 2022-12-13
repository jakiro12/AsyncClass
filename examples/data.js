const containData=document.querySelector('div')
let nameUser=document.createElement('h1')
const containData2=document.querySelector('.number2')
let logo=document.createElement('img')
let statusName=document.createElement('p')
let speciesType=document.createElement('p')
logo.className='imgStyles'

const myUrl='https://rickandmortyapi.com/api/character/'

let value=1
const apiReponse =async()=>{
    try{
        let results= await fetch(`${myUrl}${value}`)
        .then(res=>res.json())
        .then(data=>{
         nameUser.innerText=`${data.name}`
         containData.appendChild(nameUser)
         logo.src=`${data.image}`
         containData.appendChild(logo)
         statusName.innerText=`Status character: ${data.status}`
         containData.appendChild(statusName)
         speciesType.innerText=`Species: ${data.species}`
            containData.appendChild(speciesType)

        })
        return results
    }
    catch(e){
        console.log(e.message)
        alert(e.message)
    }
    
}
apiReponse()
let value2=3

const apiReponse2 =async()=>{
    try{
        let results= await fetch(`${myUrl}${value2}`)
        .then(res=>res.json())
        .then(data=>{
         containData2.innerText=`${data.name}`
        

        })
        return results
    }
    catch(e){
        console.log(e.message)
        alert(e.message)
    }
    
}
apiReponse2()
