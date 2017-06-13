$(document).ready(function(){

	var Valid = false;
	$("#Submit").click(function(){
		event.preventDefault();
		var Value = $("#AddItem").val();
		
		if ($('#AddItem').val().length === 0) {
			$('#AddItem').parent().find('#error').text("This field is required").addClass('redError');
			return;
		}

		$("#NeedToShop").append("<li>"+Value+"</li>");
		$("#AddItem").val("");

	
	}); //Click Function

	$("#NeedToShop, #InCart").sortable({
		connectWith: ".lists",
		containment: "#Device"
	});
	
		
	$("#InCart").droppable({
		accept: "li",
		drop: function (event, ui){
			ui.draggable.addClass("green");
			ui.draggable.removeClass("red");
			
		}

	});

	$("#NeedToShop").droppable({
		accept: "li",
		drop: function (event, ui){
			ui.draggable.removeClass("green");
			ui.draggable.addClass("red");

		}

	});


	$('#AddItem').blur(function(){
		$(this).parent().find('span');
		var errors = $(this).parent().find('#error')
		errors.empty();
		if ($(this).val().length === 0) {
			errors.text("This field is required");
			return;
		}
		Valid = true;
		
	});


}); //Document Ready