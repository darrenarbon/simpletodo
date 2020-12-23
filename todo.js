
//add click highlights
$("ul").on("click", "li", function() {
	$(this).toggleClass("hoverList");
});


//remove a to do
$("ul").on("click", "span.delete", function(e) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})

	e.stopPropagation();
})

//flag a todo
$("ul").on("click", "span.flag", function(e) {
	
	var oLi = $(this).parent().remove()
	if ($(this).hasClass("important") == true){
		//we are demoting this
		$("ul").append(oLi);
	} else {
		//we are promoting this
		$("ul").prepend(oLi);
	}

	$(this).toggleClass("important");
	e.stopPropagation();
})

$("ul").on()

$("input").on("keypress", function(e){
	if (e.which === 13){
		var oNewList = "<li><span class='delete'><i class='fa fa-trash'></i></span> " + $(this).val() + "  <span class='flag'><i class='fa fa-flag'></i></span></li>"
		$(this).val("")
		$("ul").append(oNewList);
	}
});

$(".fa-plus").on("click", function(){
	$("input").toggle();
})

