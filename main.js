var slides = $(".slide");
var current = 0;
var total = slides.length;

var animating = false;


slides.addClass("hidden");
$(slides[current]).removeClass("hidden").addClass("active");

function slide_next() {
	if(animating)
	{
		return;
	}
	animating = true;

	var prev = current;
	current++;
	current = current%total;
	$(slides[current]).removeClass("hidden");
	$(slides[current]).css({top:"-100%", zIndex:1}).addClass("active");
	$(slides[prev]).css({zIndex:"0"}).removeClass("active");
	$(slides[current]).animate({
		top:"0"
	}, 1000, "swing", function(){
		slides.addClass("hidden");
		$(slides[current]).removeClass("hidden");
		animating = false;
	})
}

function slide_prev() {
	if(animating)
	{
		return;
	}
	animating = true;
	prev = current;
	current--;
	if(current == -1)
	{
		current = total-1;
	}
	$(slides[current]).removeClass("hidden");
	$(slides[current]).css({top:"100%", zIndex:"1"});
	$(slides[prev]).css({zIndex:"0"});
	$(slides[current]).animate({
		top:"0"
	}, 1000, "swing", function(){
		slides.addClass("hidden");
		$(slides[current]).removeClass("hidden").addClass("active");
		animating = false;
	})
}