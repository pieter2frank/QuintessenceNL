<?php
$headers  = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

if($_POST['antibot'] == ""){
	
}else{
	echo "You are a bot!";
	exit; 	
}

$senderName			= $_POST['name'];
$senderEmail		= $_POST['email'];
$senderTel			= $_POST['phone'];
$senderOpmerking	= $_POST['message'];
$result 			= str_replace(array("\r\n", "\r", "\n"), "<br />", $senderOpmerking);

$to 			= "pieter2frank@gmail.com";
$ToName 		= "Quintessence ";
$date 			= date("m/d/Y H:i:s");
$ToSubject 		= "Reactie van website Quintessence: $senderName";
$EmailBody 		= "<br />Dit is een bericht van de website http://www.quintessence.co.nl:<br /><br />
              	<strong>Verzonden door:</strong> $senderName : $senderEmail <br />
				<strong>Tel:</strong> $senderTel <br />
				<br />
				<strong>vraag/ opmerking:</strong>
			  	<br />$result<br /><br />
			  	<br />";  
$EmailFooter	= "<br />Verzonden op: $date<br /><br />";
$Message 		= $EmailBody.$EmailFooter;
$ok = mail($to, $ToSubject, $Message, $headers . "From:$senderName <".$to.">");
if($ok){
	echo "Uw  verzoek is verzonden.";
}else{
	echo "Error";
}

?>