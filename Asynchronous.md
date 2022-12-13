## Async en JavaScript
Aincronico hace referencia a aquello que ocurre en otro tiempo de ejecucion de nuestro codigo, imagine que tiene un horario establecido para cada tarea en su dia, se podria decir que tiene tareas sincronicas dado que siguen un tiempo y orden de ejecucion.
En el caso que estuviera cocinando una comida y a la vez otra tarea personal se puede decir el hecho de que la comida termine de realizar mientra ejecuta otra tarea es asincronico.
En la programacion podemos ejecutar tareas del mismo modo, mientras una funcion se ejecuta podemos dejar otra pendiente de su ejecucion.

Cual de las siguientes funciones cree que se ejcutara primero?
<script>
    let onlyNames='leonardo'

function hisName(){
    console.log(onlyNames)
}
function sayName(){
    setTimeout(function hi(){
        console.log(`hola ${onlyNames}`)
    },2000)
    
}
</script>

## Uso correcto con promesas
En JavaScript una promesa es aquella esta pendiente de ser resuelto en el front-end o back-end.

Un Promise está en uno de estos estados:

pending (pendiente): estado inicial, ni cumplido ni rechazado.
fulfilled (cumplida): lo que significa que la operación se completó con éxito.
rejected (rechazada): lo que significa que la operación falló.

## Async Await
Ahora hablaremos sobre estos dos metodos y su uso.
De manera resumida hacen lo mismo que antes nombras, ejecutar una funcion u proceso despues de hablar completado el resto de sus tareas.
<script>
const apiReponse =async()=>{
    try{
        let results= await fetch(`https://rickandmortyapi.com/api/character/1`)
        .then(res=>res.json())
        .then(data=>{
         console.log(data)
        })
        return results
    }
    catch(e){
        console.log(e.message)
        alert(e.message)
    }
    
}
</script>

Este codigo realiza una consulta asincronica a una api de JSON donde se almacenan los datos necesarios para nuestro proyecto