$(document).ready(function() {
	var entry = $('#entry');
	var headers = $('#field_headers');
	var songs = $('#songs');
	headers.hide()

	entry.click( function() { 
		entry.hide()
		headers.show()
		jQuery.getJSON('lab4.json', function(data) {
			for (var i = 0; i < data.length; i++) {

				var song = ''
				if (i == data.length - 1) 
					song += ('<ul class="bottom_element">')
				else
					song += ('<ul class="middle_element">')

				if (data[i].track == 'Grapevine Fires')
					song += '	<li class="title favorite">' + data[i].track + '</li>'
				else
					song += '	<li class="title">' + data[i].track + '</li>'
					
				song += ('	<li class="artist">' + data[i].artist + '</li>')
				song += ('	<li class="album">' + data[i].album + '</li>')
				song += ('	<li class="release_date">' + data[i].release + '</li>')
				song += ('	<li class="genre">&#8226' + data[i].genre + '</li>')
				song += ('	<li class="website"><a href="http://www.' + data[i].website + '">' + data[i].website + '</a></li>')
				song += ('	<li class="cover"><img class="cover_image" src="../images/' + data[i].cover + '"</li>')
				song += ('</ul>')
				songs.append(song)
			}
   		});
	});
});
