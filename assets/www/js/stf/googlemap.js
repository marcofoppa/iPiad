//function GoogleMap() {

//    this.initialize = function() {
//        var map = showMap();
//    };

//    var showMap = function() {
//        var mapOptions = {
//            zoom: 4,
//            center: new google.maps.LatLng(-33, 151),
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//        };

//        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

//        return map;
//    };
//}

//function GoogleMap(lat, lon)
//{
//    var latlng = new google.maps.LatLng(lat, lon); // centro della mappa
//    var myLatlng = new google.maps.LatLng(lat, lon); // segnapunto
    
//    // definizione della mappa
//    var myOptions =
//    {
//        zoom: 19,
//        center: latlng,
//        mapTypeId: google.maps.MapTypeId.HYBRID,
//        mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR }
//    };
    
//    var mymap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

//    // definizione segnapunto
//    var marker = new google.maps.Marker(
//    {
//        position: myLatlng,
//        map: mymap,
//        title: "Il posto"
//    });
//}