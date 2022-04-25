import axios from "axios";
import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./CariAlamat.css";

function CariAlamat() {
  let navigate = useNavigate();
  let location = useLocation();

  var [searchAlamat, setSearchAlamat] = useState("");

  var [namaPenerima, setNamaPenerima] = useState("");
  var [noHp, setNoHp] = useState("");
  var [labelAlamat, setLabelAlamat] = useState("");
  var [kotaKecamatan, setKotaKecamatan] = useState("");
  var [alamatLengkap, setAlamatLengkap] = useState("");
  var [noteAlamat, setNoteAlamat] = useState("");
  var [pinpointMaps, setPinpointMaps] = useState([]);

  useEffect(() => {
    if (location.state !== null) {
      setPinpointMaps(location.state);
    }
  }, []);

  useEffect(() => {
    if (pinpointMaps.length !== 0) {
      console.log("pinpoint", pinpointMaps);
      setKotaKecamatan(
        `${
          pinpointMaps.address_components[
            pinpointMaps.address_components.length - 4
          ].long_name
        },${
          pinpointMaps.address_components[
            pinpointMaps.address_components.length - 5
          ].long_name
        }`
      );
      setAlamatLengkap(pinpointMaps.formatted_address);
    }
  }, [pinpointMaps]);

  const createAlamat = () => {
    var postObj = {
      AddressID: "",
      PatientID: 1,
      AddressName: labelAlamat,
      AddressFull: pinpointMaps.formatted_address,
      PostalCode:
        pinpointMaps.address_components[
          pinpointMaps.address_components.length - 1
        ].long_name,
      ProvinceName:
        pinpointMaps.address_components[
          pinpointMaps.address_components.length - 3
        ].long_name,
      CityName:
        pinpointMaps.address_components[
          pinpointMaps.address_components.length - 4
        ].long_name,
      SubDistrictName: `${
        pinpointMaps.address_components[
          pinpointMaps.address_components.length - 5
        ].long_name
      },${
        pinpointMaps.address_components[
          pinpointMaps.address_components.length - 6
        ].long_name
      }`,
      Longitude: pinpointMaps.geometry.location.lng,
      Latitude: pinpointMaps.geometry.location.lat,
      YorN: "Y",
    };

    console.log("post alamat baru", postObj);

    var url =
      "https://staging-api.cfu.pharmalink.id/ppds/prescription/insert/address";
    axios
      .post(url, postObj)
      .then((response) => {
        console.log("response post alamat", response);
        if (response.data.error.status == false) {
          navigate("/daftar-alamat");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="body">
      <div className="container-alamat">
        <div className="judul-halaman">
          <iconbutton
            className="kembali"
            onClick={() => navigate("/daftar-alamat")}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </iconbutton>
          <span className="nama-judul">Cari Alamat</span>
        </div>

        {/* <div className="header-alamat">
          <div className="search-alamat">
            <div className="icon-search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <span className="content-search-alamat">
              Tulis nama jalan/alamat/gedung/perumahan
            </span>
          </div>
        </div> */}

        <div className="search-alamat">
          <div className="box-icon">
            <div className="icon-search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <input
            className="input-search-alamat"
            placeholder="Tulis Nama jalan/Alamat/Gedung/Perumahan"
          />
        </div>

        <div className="pinpoint">
          <div className="location">
            <iconbutton
              className="icon-location"
              onClick={() => navigate("/maps-pinpoint")}
            >
              <i class="fa-solid fa-location-dot"></i>
            </iconbutton>
            <iconbutton
              className="content-location"
              onClick={() => navigate("/maps-pinpoint")}
            >
              Pilih pinpoint lokasi anda
            </iconbutton>
          </div>
        </div>

        <div className="content-judul-alamat">Alamat</div>
        <div className="box-alamat">
          <div className="content-box-alamat">
            <div className="box-penerima">
              <div className="nama-penerima">Nama Penerima</div>
              <input
                className="input-nama-penerima"
                placeholder="Masukkan Nama Penerima"
                value={namaPenerima}
                onChange={(e) => setNamaPenerima(e.target.value)}
              />
            </div>

            <div className="box-penerima">
              <div className="nama-penerima">Nomor Hp</div>
              <input
                className="input-nama-penerima"
                placeholder="Masukkan Nomor Hp"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
              />
            </div>

            <div className="box-penerima">
              <div className="nama-penerima">Label Alamat</div>
              <input
                className="input-nama-penerima"
                placeholder="Rumah/Apartemen/Kantor/Kos"
                value={labelAlamat}
                onChange={(e) => setLabelAlamat(e.target.value)}
              />
              <input
                className="input-nama-penerima"
                placeholder="Kota & Kecamatan"
                value={kotaKecamatan}
                onChange={(e) => setKotaKecamatan(e.target.value)}
              />
              <input
                className="input-nama-penerima"
                placeholder="Alamat Lengkap"
                value={alamatLengkap}
                onChange={(e) => setAlamatLengkap(e.target.value)}
              />
            </div>

            <div className="box-penerima">
              <div className="nama-penerima">Note</div>
              <input
                className="input-note"
                placeholder="Masukkan Note"
                value={noteAlamat}
                onChange={(e) => setNoteAlamat(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="simpan-alamat">
          <button className="btn-simpan-alamat" onClick={() => createAlamat()}>
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default CariAlamat;
