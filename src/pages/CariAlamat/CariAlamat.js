import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CariAlamat.css";

function CariAlamat() {
  let navigate = useNavigate();

  var [searchAlamat, setSearchAlamat] = useState("");

  var [namaPenerima, setNamaPenerima] = useState("");
  var [noHp, setNoHp] = useState("");
  var [labelAlamat, setLabelAlamat] = useState("");
  var [kotaKecamatan, setKotaKecamatan] = useState("");
  var [alamatLengkap, setAlamatLengkap] = useState("");
  var [noteAlamat, setNoteAlamat] = useState("");

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
            <iconbutton className="icon-location" onClick={() => navigate("/maps-pinpoint")}>
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
              />
            </div>

            <div className="box-penerima">
              <div className="nama-penerima">Nomor Hp</div>
              <input
                className="input-nama-penerima"
                placeholder="Masukkan Nomor Hp"
              />
            </div>

            <div className="box-penerima">
              <div className="nama-penerima">Label Alamat</div>
              <input
                className="input-nama-penerima"
                placeholder="Rumah/Apartemen/Kantor/Kos"
              />
              <input
                className="input-nama-penerima"
                placeholder="Kota & Kecamatan"
              />
              <input
                className="input-nama-penerima"
                placeholder="Alamat Lengkap"
              />
            </div>

            <div className="box-penerima">
              <div className="nama-penerima">Note</div>
              <input className="input-note" placeholder="Masukkan Note" />
            </div>
          </div>
        </div>

        <div className="simpan-alamat">
          <button className="btn-simpan-alamat">Simpan</button>
        </div>
      </div>
    </div>
  );
}

export default CariAlamat;
