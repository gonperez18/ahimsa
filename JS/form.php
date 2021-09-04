<?php

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

if($nombre === "" || $correo ==="" || $mensaje ===""){
    echo json_encode ("Completar todos los campos");
} else{
    echo json_encode("Correcto: <br>Nombre:".$nombre."<br>Mail:".$correo);
}