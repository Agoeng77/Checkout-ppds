import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import Geocode from "react-geocode";
import styles from "./MapsPinpoint.css";

function MapsPinpoint() {
  const [currentPosition, setCurrentPosition] = useState({});
  const [currentAddress, setCurrentAddress] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    Geocode.setApiKey("AIzaSyB6Jb0JULqpai24UL-zql2BW7UeG0TAGGE");
  }, []);

  useEffect(() => {
    console.log("current position", currentPosition);
  }, [currentPosition]);

  useEffect(() => {
    console.log("current address", currentAddress);
  }, [currentAddress]);

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

    Geocode.setLanguage("en");
    Geocode.setRegion("id");
    Geocode.enableDebug();
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        setCurrentAddress(response.results[0]);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const mapStyles = {
    height: "80vh",
    width: "100%",
    margin: "25px auto",
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
              onClick={(e) => onMarkerDragEnd(e)}
            >
              {currentPosition.lat ? (
                <Marker
                  position={currentPosition}
                  // onDrag={(e) => onMarkerDragEnd(e)}
                  draggable={true}
                />
              ) : null}
            </GoogleMap>
          </LoadScript>
          <div className="simpan-alamat">
            <button
              className="btn-simpan-alamat"
              onClick={() =>
                navigate("/cari-alamat", { state: currentAddress })
              }
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapsPinpoint;
