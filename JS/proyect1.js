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
}
var baseDatos=[];
function agregar (){
    baseDatos.push(nuevoPedido);
    console.log(baseDatos)

}
