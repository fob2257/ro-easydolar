<?php 
	header('Access-Control-Allow-Origin: *');  
  	// Loading the library
  	require 'PHPMailer/PHPMailerAutoload.php';

  	// Email del usuario hacia hayakawa

  	// Info proveniente del post
	$nombre = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
	$asunto = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	$mensaje = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

	// config
	$mail = new PHPMailer(); 														// new object
	$mail->isSMTP();																// enable smtp
	$mail->Host = 'smtp.gmail.com';			
	$mail->SMTPAuth = true;															// autenticacion activada
	$mail->Username = 'easydolar.contacto@gmail.com';
	$mail->Password = '';
	$mail->SMTPSecure = 'ssl'; 														// ssl requerido para gmail
	$mail->Port = 465;															// 465 o 587 puertos de gmail
	
	$mail->setFrom = $email;
	$mail->FromName = $nombre;
	$mail->AddAddress('inti.industrial.contacto@gmail.com');			// A quien se le envia / pueden ser varios
	//$mail->AddAddress('contacto@rosolutions.com.mx');
	$mail->addReplyTo($email);

	$mail->IsHTML(true);

	$mail->Subject = $asunto;
	$mail->Body = '<p>Mensaje enviado por: '.$nombre.'</p><br>'.$mensaje;
	$mail->AltBody = $mensaje;
	$mail->CharSet = 'UTF-8';

	$mail->SMTPDebug = 0; 															// 0 nada | 1 error y mensaje | 2 mensaje
	//$mail->SMTPDebug = 4;

	if(!$mail->send()) {
		echo 'Fallo el envio';
		echo 'Error: '.$mail->ErrorInfo;
		echo json_encode(array('status' => '0'));
	} else {
		//echo 'Mensaje enviado';
		echo json_encode(array('status' => '1'));
	}

?>