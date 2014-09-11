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

			socket.on('checkin', function(data){
				self.addLocal(data);
			});

		    ko.applyBindings(this);
		},
		initializeMap: function(mapOptions){
			var self = this;

			google.maps.event.addDomListener(window, 'load', function() {
				
				self.map = new google.maps.Map(document.getElementById(self.elementId), mapOptions);

				// self.done();
			});
		},

		markerClicked: function(){
			console.log('clicou na bagaça');
		},
		addLocal: function(local){
			
			var _local = ko.mapping.fromJS(local);

			var latlng = new google.maps.LatLng(_local.latitude(), _local.longitude());

			var marker = new google.maps.Marker({
				title: _local.nome(),
				position: latlng,
				draggable: true,
				url: '/',
				animation: google.maps.Animation.DROP
		    });

		    marker.setMap(this.map);
		    
		    google.maps.event.addListener(marker, 'drag', function() {
		        var pos = marker.getPosition();
		        _local.latitude(pos.lat());
		        _local.longitude(pos.lng());
		    }.bind(this));
		    
		    google.maps.event.addListener(marker, 'dragend', function() {
		        var pos = marker.getPosition();
		        _local.latitude(pos.lat());
		        _local.longitude(pos.lng());
		    }.bind(this));

		    google.maps.event.addListener(marker, 'click', this.markerClicked);

		    this.locais.push(_local);
		}
	});

})();