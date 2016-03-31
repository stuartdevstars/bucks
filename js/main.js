$(function(){
	$Bucks = {};
	$Bucks.loadMap = function() {
		var mapCenter = new google.maps.LatLng(51.615432, -0.557214);

	    var $config = {
	        scrollwheel: !1,
	        navigationControl: !1,
	        mapTypeControl: !1,
	        scaleControl: !1,
	        draggable: !1,
	        zoom: 12,
	        center: mapCenter,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    $Bucks.map = new google.maps.Map(document.getElementById("contact-map"), $config)

		var marker = new google.maps.Marker({
			position: mapCenter,
			title:"Hello World!",
			url: "http://maps.apple.com/?daddr=Amersham+Road,+Chalfont+St+Giles,+Bucks+HP8+4RU"
		});

		google.maps.event.addListener(marker, 'click', function() {
			window.location.href = this.url;
		});

		marker.setMap($Bucks.map);
	};

	$Bucks.loadMap();

	google.maps.event.addDomListener(window, "resize", function() {
		var center = $Bucks.map.getCenter();
		google.maps.event.trigger($Bucks.map, "resize");
		$Bucks.map.setCenter(center);
	});

	$("#open-modal").click(function(e) {
		$('#modal-overlay, #modal').fadeIn();
		e.preventDefault()
	});

	$("#close-modal").click(function(e) {
		$('#modal-overlay, #modal').fadeOut();
		e.preventDefault()
	});

	$('html').click(function() {
		$('#modal-overlay, #modal').fadeOut();
	});

	$('#modal, #open-modal').click(function(e){
		e.stopPropagation();
	});
})