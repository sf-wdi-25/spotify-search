// wait for DOM to load before running JS
$(document).ready(function() {

	// check to make sure JS is loaded
	console.log('JS is loaded!');
	// url = https://api.spotify.com/v1/search?q=**keyword**&type=track
  
  	$(".loading").hide();
  	var url;

  	$("input").keydown(function handler() {
	  	if (event.which === 13) {
	  		var urlFriendlyString = $("input").val().replace(" ", "+");
	  		url = "https://api.spotify.com/v1/search?q=" + urlFriendlyString + "&type=track";
	  		$.ajax({
	  			method: "GET",
			  	url: url,
			  	success: function (data) {
			  		$(".music h1").remove();
			  		$(".loading").hide();
			  		if (data.tracks.items.length === 0) {
			  			$(".music").html("<h1>No music found matching those keywords.</h1>");
			  		} else {
			  			data.tracks.items.forEach(function (element) {
			      			$(".music").append("<h1>" + element.artists[0].name + " - " + element.name + "</h1>");
						});
			  		}
	  			},
	  			error: function(error) {
	  				$(".music").text("There was an error. Code: " + error);
	  			}
	  		});
	  		$(".loading").show();
	  	}
  	});

  

});
