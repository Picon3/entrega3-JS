//Creacion de usuario, lo obtengo del html manipulo el DOM
const usuario = document.getElementById("usuario")
const password = document.getElementById("password")
const enviar = document.getElementById("enviar")



//constructor de motos - marca /cilindradas/ precio

const Moto = function (marca, cilindradas, kilometraje, precio) {
    this.Marca = marca
    this.Cilindradas = cilindradas
    this.kilometraje = kilometraje
    this.Precio = precio
}

//crear productos           Marca-  CC  -   KM  -  PRECIO

let moto1 = new Moto("Yamaha Smash", 200, 1000, 2000)
let moto2 = new Moto("Kymco Scooter", 125, 2500, 1000)
let moto3 = new Moto("Kawasaky R1", 1000, 0, 11000)
let moto4 = new Moto("Gilera Scooter", 150, 500, 1500)
let moto5 = new Moto("Honda Flash", 150, 2000, 2500)
let moto6 = new Moto("Rouser TNT", 500, 500, 5500)

// los ingreso en un array

let array = [moto1, moto2, moto3, moto4, moto5, moto6]

// creo funcion para buscar moto dentro del array, dentro de cada moto.. filtrer busca entre cada producto


function buscarMoto() {


    let cliente = prompt("ingrese la moto que busca").toUpperCase()
    let resultado = array.filter((Moto) => Moto.Marca.toUpperCase().includes(cliente))  //creo funcion flecha especificando que quiere buscar el cliente, moto, a traves de la marca.

    // verifico que el usuario haya ingresado bien la busqueda
    if (resultado.length > 0) {
        console.table(resultado)    //salida del resultado console.tabla 
    } else {                          //si ingresa mal la busqueda se vuelve a ejecutar funcion buscarmoto
        alert("no se encontro " + cliente + " profavor volve a ingresar otra moto")
        buscarMoto()
        return;
    }

}
//como enviar el formulario
enviar.addEventListener('click', (x) => {

    localStorage.setItem("nombreUsuario", usuario.value)    //guardo de forma local lo que el usuario ingresa
    localStorage.setItem("contraseñaUsuario", password.value)

    x.preventDefault()
    const data = {
        usuario: usuario.value,
        password: password.value
    }
    if (data.usuario.length != 0) {
        alert("bienvenido " + data.usuario); //saludo de bienvenida
        buscarMoto()
    } else {
        alert("ingrese un usuario valido");
    }

    // usuario.value = localStorage.getItem("nombreUsuario") --- El retorno de los datos del usuario lo comento porque no lo necesito en este formulaario de inicio de sesion, pero lo dejo en el codigo como muestra de como se hace.
    // password.value = localStorage.getItem("contraseñaUsuario")

    console.log(data) //esto comprueba que la funcion del click en el boton de eniar funciona y me almacena los datos en Usuario y Contraseña
})



