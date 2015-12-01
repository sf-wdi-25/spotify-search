// wait for DOM to load before running JS
$(document).ready(function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  
  $('input').keydown(function handler(event) {
  	if (event.which === 13) {
  		event.preventDefault();
  		var searchTerm = $('input').val();
  		for (var i = 0; i < searchTerm.length; i++) {
  			if (searchTerm[i] === " ") {
  				searchTerm[i] = "+";
  			}
  		}
	  	$.ajax({
	  			method: 'GET',
	  			url: 'http://api.spotify.com/v1/search?q=' + searchTerm + '&type=track',
	  			success: function (response) {
	    			response.tracks.items.forEach(function (element) {
	    				$(".container").append("<p>" + element.name + " " + element.artists[0].name + "</p>");
	    			});
	  		}
			});
		}
	});
});