$(document).ready(function(){

	$("#Submit").click(function(){
		event.preventDefault();
		var Value = $("#AddItem").val();
		if (Value.length === 0) {
			alert('Please enter an Item');
			return;
		}

		$("#NeedToShop").append("<li>"+Value+"</li>");
		$("#AddItem").val("");


	});

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



})	;