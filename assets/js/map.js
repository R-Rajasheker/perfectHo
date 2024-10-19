// Initialize and add the map
function initMap() {
    // The location to center the map (for example, New York)
    var mapCenter = { lat: 40.7128, lng: -74.0060 };

    // Create the map, centered at mapCenter
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: mapCenter
    });

    // Example properties data (latitude, longitude)
    var properties = [
        { name: 'Property-1', lat: 13.0843, lng: 80.2705 },
        { name: 'Property-2', lat: 40.730610, lng: -73.935242 },
        { name: 'Property-3', lat: 40.789623, lng: -73.959893 }
    ];

    // Add markers for each property
    properties.forEach(property => {
        var marker = new google.maps.Marker({
            position: { lat: property.lat, lng: property.lng },
            map: map,
            title: property.name
        });

        // Info window for each property
        var infoWindow = new google.maps.InfoWindow({
            content: `<h4>${property.name}</h4>`
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    });
}
function filterProperties() {
    // Get the search input
    var input = document.getElementById('location-search');
    var filter = input.value.toLowerCase();
    
    // Get all the property cards
    var cards = document.getElementsByClassName('popular__card');
    
    // Loop through the cards and hide the ones that don't match the search query
    for (var i = 0; i < cards.length; i++) {
       var description = cards[i].getElementsByClassName('popular__description')[0];
       if (description) {
          var textValue = description.textContent || description.innerText;
          if (textValue.toLowerCase().indexOf(filter) > -1) {
             cards[i].style.display = "";
          } else {
             cards[i].style.display = "none";
          }
       }      
    }
 }
 
