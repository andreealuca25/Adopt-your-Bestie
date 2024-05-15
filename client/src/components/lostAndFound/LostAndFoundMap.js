import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "react-router-dom";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const ClickableMap = ({ setPosition }) => {
  useMapEvent("click", (e) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
  });
  return null;
};

const LostAndFoundMap = () => {
  const [position, setPosition] = useState(null);
  const [hasLocation, setHasLocation] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
          setHasLocation(true);
        },
        (err) => {
          console.warn(`ERROR(${err.code}): ${err.message}`);
          setPosition([51.505, -0.09]);
        }
      );
    } else {
      setPosition([51.505, -0.09]);
    }
  }, []);

  if (position === null) {
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "50%", marginRight: "1%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ClickableMap setPosition={setPosition} />
      <Marker position={position}>
        <Popup>
          {hasLocation ? (
            <>
              <Link
                to={
                  "foundPet/" +
                  position[0].toFixed(5) +
                  "," +
                  position[1].toFixed(5)
                }
              >
                Report the missing pet
              </Link>
            </>
          ) : (
            "Click to move the marker"
          )}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LostAndFoundMap;
