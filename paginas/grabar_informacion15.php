<?php

$nombre = $_POST["txtnombre"];

?>

<!DOCTYPE html>
<html lang="en">



<head>
    <meta charset="UTF-8">
    <meta txtnombre="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica de la sesion 5</title>
    <link rel="stylesheet" href="../css/style.css">       
</head>

<body>
    <header class="cabezera bordes colorear">
        <fieldset>
         <legend>Venta procesada: </legend>
         <h2 class="txtalinear">Gracias por tu compra </br><?php echo $nombre ?></h2>
        </fieldset>
    
    
</body>

</html>