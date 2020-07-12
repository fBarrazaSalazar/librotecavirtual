<?php

	require 'db.php';

	$productos = [];
	$sql = "SELECT * FROM productos";

	if($result = mysqli_query($con,$sql)){
  		$i = 0;

  		while($row = mysqli_fetch_assoc($result)){
    		$productos[$i]['id_producto'] = $row['id_producto'];
    		$productos[$i]['titulo'] = $row['titulo'];
    		$productos[$i]['resena'] = $row['resena'];
    		$productos[$i]['autor'] = $row['autor'];
    		$productos[$i]['anio'] = $row['anio'];
    		$productos[$i]['pais'] = $row['pais'];
    		$productos[$i]['imagen'] = $row['imagen'];
    		$productos[$i]['editorial'] = $row['editorial'];
    		$productos[$i]['precio'] = $row['precio'];
    		$productos[$i]['cantidad'] = $row['cantidad'];
    		$i++;
  		}

  		echo json_encode($productos);

	}else{
  		http_response_code(404);
	}

?>