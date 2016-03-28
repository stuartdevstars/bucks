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
			title:"Hello World!"
		});

		marker.setMap($Bucks.map);
	};

	$Bucks.loadMap();

	google.maps.event.addDomListener(window, "resize", function() {
		var center = $Bucks.map.getCenter();
		google.maps.event.trigger($Bucks.map, "resize");
		$Bucks.map.setCenter(center);
	});
})