let map;
let service;
let infowindow;

function initMap() {
    const dallas = new google.maps.LatLng(32.7767, -96.7970);
    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(document.getElementById("map"), {
        center: dallas,
        zoom: 18,
    });

    const request = {
        query: "recycle",
        fields: ["name", "geometry"],
    };

    service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
            map.setCenter(results[0].geometry.location);
        }
    });
}

function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;
    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
    });
    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map);
    });
}