import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import styles from "./MapsPinpoint.css";



function MapsPinpoint() {
  const [currentPosition, setCurrentPosition] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    console.log("current position", currentPosition);
  }, [currentPosition]);

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });
  };

  const mapStyles = {
    height: "70vh",
    width: "100%",
    
    
  };

  return (
    <div className="body">
      <div className="container-alamat">

      <div className="judul-halaman">
          <iconbutton
            className="kembali"
            onClick={() => navigate("/cari-alamat")}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </iconbutton>
          <span className="nama-judul">Pin Point</span>
        </div>
        <div className="maps">
        <LoadScript googleMapsApiKey="AIzaSyB6Jb0JULqpai24UL-zql2BW7UeG0TAGGE">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={currentPosition}
          >
            {currentPosition.lat ? (
              <Marker
                position={currentPosition}
                onDrag={(e) => onMarkerDragEnd(e)}
                draggable={true}
              />
            ) : null}
          </GoogleMap>
        </LoadScript>
        </div>
      </div>
    </div>
  );
}

export default MapsPinpoint;
