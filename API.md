## Que es un API
Las interfaces de programación de aplicaciones (API) son construcciones disponibles en lenguajes de programación para permitir a los desarrolladores crear funcionalidades complejas más fácilmente. Abstraen código más complejo lejos de ti, proporcionando una sintaxis más fácil de usar en su lugar.

## ¿Cómo funciona una API para desarrolladores de proyectos JavaScript?
Una API que muchos usuarios de JavaScript prefieren usa comúnmente el método de solicitud GET. Sin embargo, una solicitud POST puede usarse para crear objetos para clasificar elementos o detectar contenido específico en el cuerpo de respuesta de la solicitud. Por ejemplo, una solicitud POST podría extraer ingredientes de los resultados de una API basada en recetas. Se devuelven respuestas con formato de notación de objetos JavaScript (JSON).

## Metodos GET,POST ,PUT ,DELETE Y PATCH

* GET
    El método GET se utiliza para recuperar datos del servidor. Este es un método de solo lectura, por lo que no tiene riesgo de mutar o corromper los datos. Por ejemplo, si llamamos al método get en nuestra API, obtendremos una lista de todas lo escrito.
Ejemplo:
<!DOCTYPE html>
<html>
<body>
<h1>Get hands on with JavaScript’s Fetch API</h1>
<p>Write your requests in the script and watch the console and network logs.</p>
<script>
// GET retrieve all to-do’s
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(json => console.log(json))
// will return all resources
// GET retrieves the to-do with specific URI (in this case id = 5)
fetch('https://jsonplaceholder.typicode.com/todos/5')
.then(response => response.json())
.then(json => console.log(json))
/* will return this specific resource:
{
“userId”: 1,
“id”: 5,
“title”: “laboriosam mollitia et enim quasi adipisci quia provident illum”,
“completed”: false
}
*/
</script>
</body>
</html>


* POST
    El método POST envía datos al servidor y crea un nuevo recurso. El recurso que crea está subordinado a algún otro recurso principal. Cuando se envía un nuevo recurso al padre, el servicio API asociará automáticamente el nuevo recurso asignándole una ID (URI de nuevo recurso). En resumen, este método se utiliza para crear una nueva entrada de datos.
Ejemplo:
<script>
// POST adds a random id to the object sent
fetch('https://jsonplaceholder.typicode.com/todos', {
method: 'POST',
body: JSON.stringify({
userId: 1,
title: "clean room",
completed: false
}),
headers: {
"Content-type": "application/json; charset=UTF-8"
}
})
.then(response => response.json())
.then(json => console.log(json))
/* will return
{
“userId”: 1,
“title”: “clean room”,
“completed”: false,
“id”: 201
}
*/
</script>

* PUT
    El método PUT se usa con mayor frecuencia para actualizar un recurso existente. Si desea actualizar un recurso específico (que viene con un URI específico), puede llamar al método PUT a ese URI de recurso con el cuerpo de la solicitud que contiene la nueva versión completa del recurso que está tratando de actualizar.
<script>
// PUT to the resource with id = 5 to change the name of task
fetch('https://jsonplaceholder.typicode.com/todos/5', {
method: 'PUT',
body: JSON.stringify({
userId: 1,
id: 5,
title: "hello task",
completed: false
}),
headers: {
"Content-type": "application/json; charset=UTF-8"
}
})
.then(response => response.json())
.then(json => console.log(json))
/* will return
{
“userId”: 1,
“id”: 5,
“title”: “hello task”,
“completed”: false
}
*/
</script>

* PATCH
    El método PATCH es muy similar al método PUT porque también modifica un recurso existente. La diferencia es que para el método PUT, el cuerpo de la solicitud contiene la nueva versión completa, mientras que para el método PATCH, el cuerpo de la solicitud solo necesita contener los cambios específicos al recurso, específicamente un conjunto de instrucciones que describen cómo se debe cambiar ese recurso. y el servicio API creará una nueva versión de acuerdo con esa instrucción.

<script>
    // PATCH to the resource id = 1
// update that task is completed
fetch(‘https://jsonplaceholder.typicode.com/todos/1', {
method: ‘PATCH’,
body: JSON.stringify({
completed: true
}),
headers: {
"Content-type": “application/json; charset=UTF-8”
}
})
.then(response => response.json())
.then(json => console.log(json))
/* will return
{
“userId”: 1,
“id”: 1,
“title”: “delectus aut autem”,
“completed”: true
}
*/
</script>

* DELETE
    El método DELETE se utiliza para eliminar un recurso especificado por su URI.

<script>
    // DELETE task with id = 1
fetch('https://jsonplaceholder.typicode.com/todos/1', {
method: 'DELETE'
})
// empty response: {}
</script>
