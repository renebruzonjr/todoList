$("ul").on("click", "li", function() {
	$(this).toggleClass("complete");
});

$("ul").on("click", "span", function() {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
});

$("input[type='text']").on("keypress",function(event){
	var t = $(this).val();
	if (event.which == 13) {
		$(this).val("");
		$("ul").prepend("<li><span><i class='fa fa-trash'></i></span> " + t + "</li>");
	}
});

$('ul').sortable({
    update: function(event, ui) { 
        ui.item.unbind("click");
        ui.item.one("click", function (event) { 
            event.stopImmediatePropagation();
        });
    }
}); 

$(".fa-check").on("click", function() {
	$("input[type='text']").slideToggle(250);
});