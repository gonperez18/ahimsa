//Formulario
$(document).ready(function () {
  $("#botonEnviar").click(function (e) {
    e.preventDefault();
    function Pedido(nombre, correo, cliente, mensaje) {
      this.nombre = nombre;
      this.correo = correo;
      this.cliente = cliente;
      this.mensaje = mensaje;
    }
    var nombreEnviar = $("#formNombre").val();
    var mailEnviar = $("#formMail").val();
    var clienteEnviar = $("#cliente").val();
    var mensajeEnviar = $("#cont-msj").val();
    //validacion
    if (nombreEnviar === "" || mailEnviar === "" || mensajeEnviar === "") {
      $( "#confirmacion" ).html( "<div class='alert alert-danger ' role='alert'>Complete todos los campos</div>" );
      return false;
    } else{
      $( "#confirmacion" ).html( "<div class='alert alert-success my-3' role='alert'> La consulta se envio correctamente </div>" );
    }
    nuevoPedido = new Pedido(
      nombreEnviar,
      mailEnviar,
      clienteEnviar,
      mensajeEnviar
    );
    console.table(nuevoPedido);
    const enJSON = JSON.stringify(nuevoPedido);
    console.log(enJSON);
    agregar();
    saludoEnviar();
    formulario.reset();

    //Descargar Json
    function download(data, filename) {
      let file = new Blob([JSON.stringify(data)], { type: "aplication/json" });
      let a = document.createElement("a");
      a.href = URL.createObjectURL(file);
      a.download = filename;
      console.log(a);
    }
    download(baseDatos, "newPedido.json");
  });
});

var baseDatos = [];

function agregar() {
  baseDatos.push(nuevoPedido);
  console.log(baseDatos);
  console.log("cantidad de consultas: " + baseDatos.length);
}

//Boton Enviar

function saludoEnviar() {
  var cssbtn = {
    background: "#2EB830",
    "max-width": "50%",
  };
  $("#botonEnviar")
    .css(cssbtn)
    .val("Gracias")
    .animate({ "margin-left": "25%" }, 1000);
}

