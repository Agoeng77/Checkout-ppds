import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./DaftarAlamat.css";

function DaftarAlamat() {
  let navigate = useNavigate();
  let location = useLocation();

  const [daftarAlamat, setDaftarAlamat] = useState([]);
  const [selectedAlamat, setSelectedAlamat] = useState([]);

  useEffect(() => {
    var url = "https://staging-api.cfu.pharmalink.id/ppds/prescription/address";
    axios
      .get(url)
      .then((response) => {
        console.log("response get alamat", response);
        if (response.data.data) {
          setDaftarAlamat(response.data.data);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  // {
  //   judulAlamat: "Rumah Agung",
  //   namaPenerima: "Arsenius Agung",
  //   noTelp: "087884398725",
  //   alamat:
  //     " Jl. Limo No.40, RT.8/RW.10, Grogol Sel., Kec. Kby. Lama, Jakarta Selatan",
  //   note: "Rumah Pagar Hijau",
  // },
  // {
  //   judulAlamat: "Rumah Dominikus",
  //   namaPenerima: "Dominikus Linestyo",
  //   noTelp: "087884398725",
  //   alamat:
  //     " Jl. Limo No.40, RT.8/RW.10, Grogol Sel., Kec. Kby. Lama, Jakarta Selatan",
  //   note: "Rumah Pagar Hijau",
  // },
  // {
  //   judulAlamat: "Rumah Ryo",
  //   namaPenerima: "Ryo Gunawan",
  //   noTelp: "087884398725",
  //   alamat:
  //     " Jl. Limo No.40, RT.8/RW.10, Grogol Sel., Kec. Kby. Lama, Jakarta Selatan",
  //   note: "Rumah Pagar Hijau",
  // },

  // useEffect(() => {
  //   var url = ``;

  //   axios.get(url).then((response) => {
  //     console.log("resp", response);

  //     if (response.data.data !== "") {
  //       setDaftarAlamat(response.data.data);
  //     } else {
  //     }
  //   });
  // }, []);

  const handleSelectAlamat = (item, index) => {
    var selectedBoxAlamat = document.getElementById(`boxAlamat${index}`);
    console.log("item", item);
    setSelectedAlamat(item);
  };

  const passSaveAlamat = () => {
    window.sessionStorage.setItem(
      "defaultAlamat",
      JSON.stringify(selectedAlamat)
    );
    navigate("/checkout");
  };

  return (
    <div className="body">
      <div className="container-alamat">
        <div className="judul-halaman">
          <iconbutton className="kembali" onClick={() => navigate("/checkout")}>
            <i className="fa-solid fa-arrow-left"></i>
          </iconbutton>
          <span className="nama-judul">Daftar Alamat</span>
          <iconbutton
            className="tambah-alamat"
            onClick={() => navigate("/cari-alamat")}
          >
            Tambah Alamat
          </iconbutton>
        </div>

        {daftarAlamat &&
          daftarAlamat.map((item, index) => (
            <div
              className="box-list-alamat"
              id={`boxAlamat${index}`}
              onClick={() => handleSelectAlamat(item, index)}
            >
              <div className="judul-header-list-alamat">
                {item.AddressName}{" "}
              </div>

              <div className="isi-box-list-alamat">
                <div className="nama-alamat">{item.ProvinceName}</div>
                <div className="no-telp">{item.CityName}</div>
                <div className="note-alamat">
                  {item.SubDistrictName}
                  {item.PostalCode}
                </div>
                <div className="alamat">{item.AddressFull}</div>
                <div className="ubah-alamat">
                  <button className="btn-ubah-alamat">Ubah Alamat</button>
                </div>
              </div>
            </div>
          ))}

        <div className="pilih-alamat">
          <button className="btn-pilih-alamat" onClick={() => passSaveAlamat()}>
            Pilih Alamat
          </button>
        </div>
      </div>
    </div>
  );
}

export default DaftarAlamat;
