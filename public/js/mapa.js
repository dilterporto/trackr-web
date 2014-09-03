(function(){

	app.mapa = Object.new({
		
		initialize: function(elementId, done) {			
			this.elementId = elementId;
			this.done = done;
			this.locais = ko.observableArray([]);

			this.initializeMap({
				center: new google.maps.LatLng(52.3731, 4.8922),
				scrollWheel: false,
				zoom: 13
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
			alert('clicou na bagaça');
		},
		addLocal: function(local){
			
			var _local = {
				latitude: ko.observable(local.latitude),
				longitude: ko.observable(local.longitude),
				nome: ko.observable(local.nome)
			};

			var latlng = new google.maps.LatLng(_local.latitude(), _local.longitude());

			var marker = new google.maps.Marker({
				title: _local.nome(),
				position: latlng,
				draggable: true,
				url: '/',
				animation: google.maps.Animation.DROP
		    });

		    marker.setMap(this.map);

		    //if you need the poition while dragging
		    google.maps.event.addListener(marker, 'drag', function() {
		        var pos = marker.getPosition();
		        _local.latitude(pos.lat());
		        _local.longitude(pos.lng());
		    }.bind(this));

		    //if you just need to update it when the user is done dragging
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