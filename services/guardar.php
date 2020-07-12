<?php
	require 'db.php';

	if($_SERVER["REQUEST_METHOD"]=="POST" && empty($_POST))
		$_POST=json_decode(file_get_contents('php://input'),true);
	
		foreach ($_POST[0] as $items) {
			$id_libro = $items["id_producto"];
			$usuario = $_POST[1]["nombrecito"];
			$email = $_POST[1]["email"];

			$sql = "INSERT INTO compras(id_libro, usuario, email) VALUES('".$id_libro."','".$usuario."','".$email."')";

			$resultado = mysqli_query($con,$sql);
		}

		class resultado{};
		$respuesta = new resultado();
		if($resultado){
			$respuesta->resultado="200";
			$respuesta->mensaje="Información guardada";
		}
		header('Content-Type:application/json');
		echo json_encode($respuesta);
	
?>

