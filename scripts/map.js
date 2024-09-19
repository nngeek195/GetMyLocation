        // Initialize the Leaflet map
        const map = L.map('map').setView([7.8731, 80.7718], 8);  // Default to Sri Lanka

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Function to get the user's current location
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;

                        // Display the latitude and longitude
                        document.getElementById("latitude").textContent = latitude;
                        document.getElementById("longitude").textContent = longitude;

                        // Update the map to the user's location
                        const userLocation = [latitude, longitude];
                        map.setView(userLocation, 15);

                        // Add a marker for the user's location
                        L.marker(userLocation).addTo(map)
                            .bindPopup("You are here!")
                            .openPopup();
                    },
                    function () {
                        alert("Unable to retrieve your location.");
                    }
                );
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }