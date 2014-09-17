(function(){

	app.mapa = Object.new({
		
		initialize: function(elementId, done, socket) {			
			
			var self = this;

			this.elementId = elementId;
			this.done = done;
			this.socket = socket;
			this.locais = ko.observableArray([]);

			this.initializeMap({
				center: new google.maps.LatLng(-19.398036, -40.0622827),
				scrollWheel: false,
				zoom: 15
		    });

			this.socket.on('checkin', function(data){
				self.addLocal(data);
			});

		    ko.applyBindings(this);
		},
		initializeMap: function(mapOptions){

            var self = this;

			google.maps.event.addDomListener(window, 'load', function() {
				
				self.map = new google.maps.Map(document.getElementById(self.elementId), mapOptions);

                self.done();
			});
		},

		markerClicked: function(){
			console.log('clicou na bagaça');
		},
		load: function(locais){
			
			var self = this;

			var _l = locais.map(function(curr, ind, arr){
				return {
					nome: curr.local.nome,
					rota: '#' + curr.rota,
					latitude: parseFloat(curr.local.latitude),
					longitude: parseFloat(curr.local.longitude),
					agente: curr.agente.nome
				}
			});

			for(var i = 0, len = _l.length; i < len; i++){
				self.addLocal(_l[i]);
			}
		},
		addMarcadorNoMapa: function(local){
			
			var latlng = new google.maps.LatLng(local.latitude(), local.longitude());

			var marker = new google.maps.Marker({
				title: local.nome(),
				position: latlng,
				draggable: true,
				url: '/' + local.nome(),
				animation: google.maps.Animation.DROP
		    });

		    marker.setMap(this.map);
		    
		    google.maps.event.addListener(marker, 'drag', function() {
		        var pos = marker.getPosition();
		        local.latitude(pos.lat());
		        local.longitude(pos.lng());
		    }.bind(this));
		    
		    google.maps.event.addListener(marker, 'dragend', function() {
		        var pos = marker.getPosition();
		        local.latitude(pos.lat());
		        local.longitude(pos.lng());
		    }.bind(this));

		    google.maps.event.addListener(marker, 'click', this.markerClicked);

		    this.map.setCenter(new google.maps.LatLng(local.latitude(), local.longitude()));
		},
		addLocal: function(local){
			
			local = ko.mapping.fromJS(local);

		    this.locais.push(local);

		    this.addMarcadorNoMapa(local);		    
		}
	});

})();