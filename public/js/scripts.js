
$(document).ready(function() {

	var socket = io.connect(window.location.host);

	var mapa = app.mapa.create('map-canvas', null, socket);

	$('#add').click(function(){

		mapa.addLocal({ latitude: -19.40374852874205, longitude: -40.0591364688255, nome: 'POSTO AUTONOVO', agente: 'Maria Almeida'});

	});

});


//19.51220237451197 --40.1242794921875