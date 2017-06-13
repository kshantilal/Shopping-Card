$(document).ready(function(){

	
	$("#Submit").click(function(){
		event.preventDefault();
		var value = $("#AddItem").val(); //Finds the value that is being inputed
		
		//Gets the error
		var errors = $(this).parent().find('#error')
		errors.empty();
		if (value.length === 0) {
			errors.text("*Please enter an Item").addClass('redError');
			return;
		}else if (value.length > 20) {
			errors.text("Must be less than 20 characters").addClass('redError');
			return;
		};
		
		
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


	$("#trash").droppable({
		drop: function(event, ui){
			ui.draggable.remove("li");
		}

	});
		




























}); //Document Ready