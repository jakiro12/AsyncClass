const apiReponse =async()=>{ 
    try{
        let results = await fetch(`https://rickandmortyapi.com/api/character/njasdf`)
        .then(res=>res.json())
        .then(data=>{
         let nameUser= `hola soy${data.name}`
         console.log(nameUser)
        })
        return results
    }
    catch(e){
        console.log(e.message)
        alert(e.message)
    }
    
}
apiReponse()