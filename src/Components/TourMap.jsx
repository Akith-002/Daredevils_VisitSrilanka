import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';

const libraries = ['places'];

export default function TourMap() {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [infoWindowData, setInfoWindowData] = useState(null);
    const [map, setMap] = useState(null);
    const [tripData, setTripData] = useState([]);

    const containerStyle = {
        width: '100%',
        height: '90vh',
        visibility: 'visible',
    };

    const center = {
        lat: 6.927079, // Latitude for Town Hall Colombo
        lng: 79.861244, // Longitude for Town Hall Colombo
    };

    // Load the Google Maps API asynchronously
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries, // Use the predefined static libraries array
    });

    // Check localStorage for tripData on component mount
    useEffect(() => {
        // Define the interval to check localStorage every second
        const interval = setInterval(() => {
            const storedTripData = localStorage.getItem('tripData');
            if (storedTripData) {
                setTripData(JSON.parse(storedTripData)); // Parse and set tripData
            }
        }, 1000); // Check every 1 second (1000 ms)
    
        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); 

    // Function to handle the map load event
    const handleMapLoad = (mapInstance) => {
        setMap(mapInstance); // Save the map instance when it's loaded
        console.log('Map loaded:', mapInstance);
    };

    const handleMarkerClick = (markerPosition) => {
        if (map) {
            const service = new window.google.maps.places.PlacesService(map); // Ensure map is available

            // Specify the request for place details using the placeId
            const request = {
                placeId: 'ChIJlU8bkM5b4joRpYheBM6lUBU', // Example placeId for Town Hall Colombo
                fields: [
                    'name',
                    'formatted_address',
                    'photos',
                    'place_id',
                    'rating',
                    'user_ratings_total',
                    'formatted_phone_number',
                ],
            };

            // Fetch the place details
            service.getDetails(request, (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setInfoWindowData({
                        name: place.name,
                        address: place.formatted_address,
                        photoUrl: place.photos ? place.photos[0].getUrl() : null,
                        photoUrl1: place.photos ? place.photos[1].getUrl() : null,
                        rating: place.rating,
                        totalRatings: place.user_ratings_total,
                        phoneNumber: place.formatted_phone_number,
                    });
                    
                    setSelectedPlace(markerPosition); // Set marker position for InfoWindow
                } else {
                    console.error('Error fetching place details:', status);
                }
            });
        } else {
            console.error('Map not loaded yet.');
        }
    };

    return isLoaded ? (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={containerStyle}
                onLoad={handleMapLoad} // Trigger map load
                center={center}
                zoom={8}
                options={{
                    zoomControl: true,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    streetViewControl: false,
                }}
            >
                {/* Render markers based on tripData from localStorage */}
                {tripData.map((location, index) => (
                    <Marker
                        key={index}
                        position={{ lat: location.lat, lng: location.lon }}
                        onClick={() => handleMarkerClick({ lat: location.lat, lng: location.lon })}
                    />
                ))}

                {/* Display the InfoWindow when a place is selected */}
                {selectedPlace && infoWindowData && (
                    <InfoWindow
                        position={selectedPlace}
                        onCloseClick={() => {
                            console.log('InfoWindow closed');
                            setSelectedPlace(null);
                        }}
                    >
                        <div className="overflow-x-hidden">
                            {console.log("data", infoWindowData)}
                            {infoWindowData.photoUrl && (
                                <div className="flex justify-between mb-1 gap-1 w-full">
                                    <img src={infoWindowData.photoUrl} alt="Place" className="w-32 h-20 object-cover rounded" />
                                    <img src={infoWindowData.photoUrl1} alt="Place" className="w-32 h-20 object-cover rounded" />
                                </div>
                            )}
                            <div className="p-4 w-64 -mt-1">
                                {/* Place Name */}
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{infoWindowData.name}</h2>

                                {/* Address */}
                                <p className="text-sm text-gray-600 mb-2">{infoWindowData.address}</p>

                                {/* Rating and Review Count */}
                                {infoWindowData.rating && (
                                    <div className="flex items-center mb-2">
                                        <span className="text-yellow-500 mr-2">
                                            {Array(Math.floor(infoWindowData.rating)).fill('⭐')}
                                        </span>
                                        <span className="text-sm text-gray-600">({infoWindowData.totalRatings} reviews)</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    ) : (
        <div>Loading...</div>
    );
}
