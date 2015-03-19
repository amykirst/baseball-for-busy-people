$(document).ready(function() {


$(".circle").mouseenter(function() {

	var element = $(this);

        element.effect({
            effect: "bounce",
            easing: "easeOutBounce",
            times: 1,
            duration: 1000,
            distance: 5
        }); // end effect

  
}); // end circle function




}); // end document ready