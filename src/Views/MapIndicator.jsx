import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../Styles/mapStyle.css";
import PropTypes from "prop-types";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom component to zoom to the marker
const ZoomToMarker = ({ position }) => {
  const map = useMap();

  if (position) {
    setTimeout(() => {
      map.flyTo(position, 10, {
        animate: true,
        duration: 0.7, // Increase duration for a smoother zoom
        easeLinearity: 0.25, // Control easing to make it smoother
      });
    }, 300); // Slight delay before zooming to give some anticipation
  }

  return null;
};

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const locations = [
    {
      position: [7.956944, 80.75972],
      text: "Sigiriya Rock Fortress",
      description:
        "A UNESCO World Heritage Site, this ancient rock fortress offers breathtaking views and intricate murals.",
      image: "../Images/Map/sigiriya.jpg",
    },
    {
      position: [7.293627, 80.64135],
      text: "Kandy",
      description:
        "A significant Buddhist temple housing the relic of the Buddha's tooth, a sacred object revered by Buddhists worldwide.",
      image: "../Images/Map/kandy.jpg",
    },
    {
      position: [6.028624, 80.216797],
      text: "Galle Fort",
      description:
        "A UNESCO World Heritage Site, this Dutch-colonial fort is a charming blend of history and culture, featuring cobblestone streets, ancient buildings, and stunning coastal views.",
      image: "../Images/Map/galle.jpg",
    },
    {
      position: [8.335, 80.4106],
      text: "Anuradhapura",
      description:
        "An ancient capital city with numerous well-preserved ruins and Buddhist temples, offering a glimpse into Sri Lanka's rich history and cultural heritage.",
      image: "../Images/Map/anuradhapura.jpg",
    },
    {
      position: [6.9739, 80.7671],
      text: "Nuwara Eliya",
      description:
        "A hill station known for its lush tea plantations, colonial architecture, and cool weather, providing a peaceful escape from the tropical heat.",
      image: "../Images/Map/nuwara-eliya.jpg",
    },
    {
      position: [6.809421, 80.499388],
      text: "Adam's Peak",
      description:
        "A sacred mountain with a footprint-shaped rock formation, popular for hiking and pilgrimage, offering stunning panoramic views of the surrounding landscape.",
      image: "../Images/Map/adampeak.jpg",
    },
    {
      position: [6.572, 81.532],
      text: "Yala National Park",
      description:
        "A wildlife sanctuary renowned for its diverse ecosystem, including leopards, elephants, and a variety of bird species, offering a thrilling safari experience.",
      image: "../Images/Map/yala.jpg",
    },
    {
      position: [7.9396, 81.0008],
      text: "Polonnaruwa",
      description:
        "An ancient capital city with impressive ruins and temples, including the Gal Viharaya, a UNESCO World Heritage Site showcasing intricate Buddhist sculptures.",
      image: "../Images/Map/polonnaruwa.jpg",
    },
    {
      position: [5.948262, 80.471588],
      text: "Mirissa",
      description:
        "A popular beach town known for its pristine beaches, whale watching opportunities, and vibrant nightlife, attracting surfers and sunseekers.",
      image: "../Images/Map/mirissa.jpg",
    },
    {
      position: [7.856667, 80.649167],
      text: "Dambulla",
      description:
        "A UNESCO World Heritage Site featuring a massive rock complex with over 80 caves containing intricate Buddhist paintings and sculptures, offering a spiritual and cultural experience.",
      image: "../Images/Map/dambulla.jpg",
    },
    {
      position: [7.189464, 79.858734],
      text: "Negombo",
      description:
        "A coastal town known for its beautiful beaches, Dutch-colonial architecture, and vibrant fishing harbor, offering a relaxed and laid-back atmosphere.",
      image: "../Images/Map/negombo.jpg",
    },
    {
      position: [6.00681, 80.25667],
      text: "Unawatuna",
      description:
        "A popular beach destination known for its golden sand, turquoise waters, and laid-back atmosphere. Ideal for snorkeling and relaxing.",
      image: "../Images/Map/unawatuna.jpg",
    },
    {
      position: [8.582618643443995, 81.24534487116394],
      text: "Thirukoneswaram Kovil",
      description:
        "A sacred Hindu temple dedicated to Lord Shiva, known for its stunning architecture, vibrant festivals, and spiritual significance.",
      image: "../Images/Map/tkovil.jpg",
    },
    {
      position: [9.674600465732622, 80.02986028650692],
      text: "Nallur Kandaswamy Kovil",
      description:
        "A renowned Hindu temple dedicated to Lord Murugan, known for its intricate carvings, vibrant festivals, and significant religious importance in the Jaffna region.",
      image: "../Images/Map/nallurKkovil.jpg",
    },
  ];

  const centerPosition = [7.8731, 80.7718]; // Center of Sri Lanka

  const handleMarkerClick = (location) => {
    setIsActive(false);
    setTimeout(() => {
      setSelectedLocation(location);
      setIsActive(true);
    }, 300);
  };

  return (
    <div style={{margin:'1em'}}>
        <h1 className="MapIndicatorHeader text-5xl font-bold">Discover</h1>
        <div style={{ display: "flex", height: "90vh", padding:'4em' }}>
            
            {/* Map Section */}
            <div className="map-box">
                <MapContainer
                center={centerPosition}
                zoom={7}
                zoomAnimation={true}
                zoomAnimationThreshold={4}
                easeLinearity={0.25}
                style={{ height: "100%" }}
                >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locations.map((location, index) => (
                    <Marker
                    key={index}
                    position={location.position}
                    eventHandlers={{ click: () => handleMarkerClick(location) }}
                    >
                    <Popup>{location.text}</Popup>
                    </Marker>
                ))}

                {/* Zoom to the selected marker */}
                {selectedLocation && (
                    <ZoomToMarker position={selectedLocation.position} />
                )}
                </MapContainer>
            </div>

            {/* Card Section */}
            <div className="info-box">
                {selectedLocation ? (
                <div className={`location-card ${isActive ? "active" : ""}`}>
                    <img src={selectedLocation.image} alt={selectedLocation.text} />
                    <div className="location-card-content">
                    <h3>{selectedLocation.text}</h3>
                    <p>{selectedLocation.description}</p>
                    </div>
                </div>
                ) : (
                <p>Select a location to see details</p>
                )}
            </div>
        </div>
    </div>
    
  );
};

ZoomToMarker.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MapComponent;
