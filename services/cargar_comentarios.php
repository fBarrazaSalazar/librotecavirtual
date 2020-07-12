<?php
	require 'db.php';

	if($_SERVER["REQUEST_METHOD"]=="POST" && empty($_POST))
		$_POST=json_decode(file_get_contents('php://input'),true);
		
		$id_libro = $_POST;
		$sql = "SELECT * FROM comentarios WHERE id_libro='".$id_libro."'";

		if($result = mysqli_query($con,$sql)){
  		$i = 0;

  		while($row = mysqli_fetch_assoc($result)){
    		$comentarios[$i]['id_libro'] = $row['id_libro'];
    		$comentarios[$i]['nombre'] = $row['nombre'];
    		$comentarios[$i]['email'] = $row['email'];
    		$comentarios[$i]['comentario'] = $row['comentario'];
    		$i++;
  		}

  		echo json_encode($comentarios);

	}else{
  		http_response_code(404);
	}
?>