$(function() {
 //get 
 $('#buton').on('click', function(){
 	$.ajax({
 		url:'/products',
 		contentType: 'application/json',
 		success: function(response){
 			console.log(response)

 		}

 	});
 });
});