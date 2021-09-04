var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("OK")

    var consulta =new FormData(formulario);
    console.log(consulta)
    console.log(consulta.get("nombre"))


    fetch("form.php",{
        method: "POST",
        body: consulta
    })
        .then(response => response.json())
        .then(data =>{
            console.log(data)
        })
})