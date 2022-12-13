const myURL= 'https://rickandmortyapi.com/api/character/'
const myDiv= document.querySelector('.apiResult')
let myTitle=document.createElement('h1')
let piccture= document.createElement('img')
piccture.className='imageStyle'
let originInfo=document.createElement('p')
let countEpisodie= document.createElement('p')
originInfo.className = 'infoCharacter'
countEpisodie.className = 'infoCharacter'
let value= 1
function sumar(){
    value = value +1
    myApi()
}
function volver(){
    if(value === 1){
        return
    }else{
        value =value - 1
    }
    myApi()
}

const myApi=async()=>{
   try {
       let responseApi= await fetch(`${myURL}${value}`)
       .then(res=>res.json())
       .then(data=>
          {  myTitle.innerText=`${data.name}`
            piccture.src=`${data.image}`
            originInfo.innerText=`Origen: ${data.origin.name}`
            myDiv.appendChild(myTitle)
            myDiv.appendChild(piccture)
            myDiv.appendChild(originInfo)
            countEpisodie.innerText=`episodios que aparece:${data.episode.length}`
            myDiv.appendChild(countEpisodie)
            
        } )
       return responseApi
    } catch (error) {
        console.log(error)
   }
}
myApi()