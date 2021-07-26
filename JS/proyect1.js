function enviar(){

function Pedido (nombre, correo, mensaje){
    this.nombre=nombre;
    this.correo=correo;
    this.mensaje=mensaje;
}
var nombreEnviar= document.getElementById("formNombre").value;
var mailEnviar= document.getElementById("formMail").value;
var mensajeEnviar= document.getElementById("cont-msj").value;

nuevoPedido = new Pedido(nombreEnviar, mailEnviar,mensajeEnviar);
console.log(nuevoPedido);
agregar();
saludo();
}
var baseDatos=[];
function agregar (){
    baseDatos.push(nuevoPedido);
    console.log(baseDatos);
    console.log("cantidad de consultas: " + baseDatos.length);
};
function saludo(){
    var nombreSaludo = document.getElementById("formNombre").value;
    var mailSaludo= document.getElementById("formMail").value;
    alert(nombreSaludo + " se envio su consulta correctamente, te responderemos a la brevedad a " + mailSaludo);
    sendOK()

}
function sendOK(){
    var elemento = document.createElement("p"),
        contenido = document.createTextNode("Mensaje enviado");
    elemento.appendChild(contenido);
    var sendOK = document.getElementById("prueba1");
    sendOK.appendChild(elemento);
    elemento.setAttribute("class", "prueba2")
}

