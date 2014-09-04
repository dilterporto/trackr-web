
$(document).ready(function() {

	var socket = io.connect(window.location.host);

	var mapa = app.mapa.create('map-canvas', null, socket);

	$('#add').click(function(){

		mapa.addLocal({ latitude: 52.3731, longitude: 4.8922, nome: 'POSTO AUTONOVO'});

	});

});


//19.51220237451197 --40.1242794921875
