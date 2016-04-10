
var initialLoad = true;

$( document ).ready(function() {
	if(initialLoad){

		var additionalOptions = {
			// Link: https://timeline.knightlab.com/docs/options.html 
			language: "de",
			default_bg_color: {r:249, g:249, b:249},
			is_full_embed: true,
			hash_bookmark: true,
			timenav_height: "150",
			timenav_height_min: "150",
			menubar_height: "0"
		}
		timeline = new TL.Timeline('timeline','https://docs.google.com/spreadsheets/d/1AMgLZleFB4BcwMbsRY9PVlkD6KRZyBGL1cXdsVCQGDI/pubhtml',additionalOptions);
		
		if ($(window).width() < 650){
			$(".links").hide();
		}
	}
});