<?php
	require 'db.php';

	if($_SERVER["REQUEST_METHOD"]=="POST" && empty($_POST))
		$_POST=json_decode(file_get_contents('php://input'),true);
		
		$id_libro = $_POST["id"];
		$calificacion = $_POST["calificacion"];


		$sql = "INSERT INTO calificaciones(id_libro, valor) VALUES('".$id_libro."','".$calificacion."')";

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

