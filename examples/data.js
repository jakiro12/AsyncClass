const containData=document.querySelector('div')
const apiReponse =async()=>{
    try{
        let results= await fetch(`https://rickandmortyapi.com/api/character/1`)
        .then(res=>res.json())
        .then(data=>{
         console.log(data)
         containData.innerText=`${data.name} + ${data.id}`
        })
        return results
    }
    catch(e){
        console.log(e.message)
        alert(e.message)
    }
    
}
apiReponse()