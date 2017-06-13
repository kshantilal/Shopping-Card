$(document).ready(function(){

	var Valid = false;
	$("#Submit").click(function(){
		event.preventDefault();
		var Value = $("#AddItem").val();
		
		//Gets the error
		$(this).parent().find('span');
		var errors = $(this).parent().find('#error')
		errors.empty();
		if ($('#AddItem').val().length === 0) {
			$('#AddItem').parent().find('#error').text("*Please enter an Item").addClass('redError');
			return;
		}
		Valid = true;
		
		// Gets the value that is in #AddItem and appends it into the list
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


	$("#Reset").click(function(){
		var	empty = $("#NeedToShop");
		empty.empty();

	});
	$("#Reset1").click(function(){
		var	empty = $("#InCart");
		empty.empty();

	});


}); //Document Ready