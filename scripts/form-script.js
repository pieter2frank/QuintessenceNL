$(function(){
	
	$("#message").hide();	   
	$("#contactform").find("label").each(function(){
	
		$(this).children().focusout(function(){
				mask = jQuery.extend({none:/^[0-9\a-z\.\s-]{0,}$/,textfieldmask: /^[0-9\a-z\.\s-?:;'"]{2,}$/i,phonemask: /^[0-9\(\)\+\.\s-]{8,}$/i,emailmask:/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/});
				// Extend het jQuery object om foutmeldingen toe te voegen die aan eigenschappen zijn toegekend
				errmsg = jQuery.extend({textfielderr:"Minimaal 2 letters",phoneerr: "Geen correct nummer",emailerr:"Ongeldig adres"});
			
				// Stel variabelen in die de details bevatten van welk masker we gaan gebruiken en of dit veld overeen moet komen met een ander veld
				var masktouse = null;
				var errtouse = null; 
				// Bepaal tegen welk mask-type we gaan valideren
				switch($(this).attr("id")) {
					case "not_required": 		masktouse="none"; 											break;
					case "name": 				masktouse="textfieldmask"; 		errtouse="textfielderr"; 	break;
					case "phone": 				masktouse="phonemask"; 			errtouse="phoneerr"; 		break;
					case "email": 				masktouse="emailmask"; 			errtouse="emailerr"; 		break;
					case "textfield": 			masktouse="textfieldmask"; 		errtouse="textfielderr"; 	break;
	
				}
				
				var object = $(this);
				
				if(mask[masktouse].test(object.val())){
					object.removeClass("error").removeClass("active").removeClass("error_feedback").addClass("isgood");
					object.parent().parent().find("div").removeClass("required").removeClass("required_error").addClass("required_ok");
				}else{
					object.val(errmsg[errtouse]);
					object.removeClass("isgood").removeClass("active").removeClass("error_feedback").addClass("error");	
					object.parent().parent().find("div").removeClass("required").removeClass("required_ok").addClass("required_error");
				}		
			
		});
	
	
	});				   
	
	
	
	
	$("#submitform").click(function() {
											
				var textString = "";
				var sending ="";
				
				$("#contactform").find("label").each(function(){
					if($(this).children().hasClass("isgood")){
						sending = "ok";
					}else{
						sending = "error";
						return false;
					}
				});
			
				if(sending == "ok"){
					$("#message").html("Uw bericht is met succes verzonden! Ik zal zo snel mogelijk op uw berricht antwoorden");
					$("#message").show().fadeIn();
					$("#contactform").hide();
					$.ajax({
  						type: "POST",
   						url: "scripts/sendmail.php",
   						data: $("#contactform").serialize(),
   						success: function(msg){}
 					});
				}else{
					$(".error").each(function(){
							$(this).everyTime(120, function(i) {
  							$(this).toggleClass("error_feedback");		
						}, 4);						  
					});
				}
			
	});
			
			
			
});


			
			

			