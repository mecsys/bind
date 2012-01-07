<?php
	$arquivo = 'relatorio.txt';
	$IP =  $_SERVER['REMOTE_ADDR'];
	$voto = $_POST['termometro'];
	$dados = $IP." $voto\n";

	if( file_put_contents($arquivo, $dados, FILE_APPEND)) {
		sleep(2);
		echo 'Seu voto foi computado com sucesso!';
	}
?>
