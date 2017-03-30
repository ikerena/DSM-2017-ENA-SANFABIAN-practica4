
var socket = io();

socket.on('chat', function(datos){
	
	//alert(datos.info);
	var coment = datos.info;
	$(".comentarios").append("<p>"+coment+"</p>");
	
	
});

$(document).ready(function() {

	$('.juego').on('change',function(){

			var id= $('.juego').val();
			$.ajax('p?id='+id, {
				
				success: function(response){
						
					$('.datos').html(response).slideDown();
	
				}
				
				
			});

			
		});
		$('.formu').on('submit', function(event){
			event.preventDefault();
			var mensaje = $('.text').val();
			
			socket.emit('chat', {info: mensaje});
			
			
		});
	

});