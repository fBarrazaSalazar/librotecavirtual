<?php
	require 'db.php';

	if($_SERVER["REQUEST_METHOD"]=="POST" && empty($_POST))
		$_POST=json_decode(file_get_contents('php://input'),true);
		
		$id_libro = $_POST["id"];
		$usuario = $_POST["name"];
		$email = $_POST["mail"];
		$comentario = $_POST["comentario"];
		$calificacion = $_POST["calificacion"];


		$sql = "INSERT INTO comentarios(id_libro, nombre, email, comentario) VALUES('".$id_libro."','".$usuario."','".$email."','".$comentario."')";
		

		$resultado = mysqli_query($con,$sql);
		

		class resultado{};
		$respuesta = new resultado();
		if($resultado){
			$respuesta->resultado="200";
			$respuesta->mensaje="Información guardada";
		}


		header('Content-Type:application/json');
		echo json_encode($respuesta);

?>

