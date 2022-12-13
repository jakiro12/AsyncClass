## Eventos dentro de etiquetas
Muchos eventos que vimos hasta ahora en JavaScript los manipulamos a traves del addEventListener, no es ninguna mala practica recurrir a esta manera pero hay que saber que las etiquetas en html nos ofrecen atajos a la hora de ejecutar eventos con JS

<button onclick="changeColor()">click</button>
<script>
    const changeColor=()=>{
        let myBtn= document.querySelector('button')
        myBtn.setAttribute('style','background:red;')
    }
</script>

Muchas Etiquetas aceptan esta manera de llamar eventos  e invocar las funciones de la manera que deseamos, en estos caso podemos ser mas especificos con lo que queremos que pasa al ejecutar ese evento.
La funcion debe ser llamada e invocada dentro de la etiqueta y si acepta parametros tambien deben de agregarse

## invocar eventos desde JavaScript

<button >click</button>
<script>
        let myBtn= document.querySelector('button')
        myBtn.onclick=function(){
        myBtn.setAttribute('style','background:red;')
        }
</script>

## Eventos de las teclas
Hay 3 eventos principales con el teclado que podemos manipular

keydown : se dispara cuando presiona una tecla en el teclado y se dispara repetidamente mientras mantiene presionada la tecla.
keyup: se dispara cuando suelta una tecla en el teclado.
keypress: se activa cuando presiona un teclado de caracteres como a, b o c, no la tecla de flecha izquierda, el inicio o el teclado final... La pulsación de tecla también se activa repetidamente mientras mantiene presionada la tecla en el teclado.



