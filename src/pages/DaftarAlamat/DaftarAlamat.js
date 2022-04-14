import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DaftarAlamat.css";

function DaftarAlamat() {
  let navigate = useNavigate();

  return (
    <div className="body">
      <div className="container-alamat">
        <div className="judul-halaman">
          <iconbutton className="kembali" onClick={() => navigate("/checkout")}>
            <i className="fa-solid fa-arrow-left"></i>
          </iconbutton>
          <span className="nama-judul">Daftar Alamat</span>
          <iconbutton className="tambah-alamat" onClick={() => navigate("/cari-alamat")}>
              Tambah Alamat
          </iconbutton>
        </div>

        <div className="box-list-alamat">
          <div className="judul-header-list-alamat">Rumah Agung </div>
          
          <div className="isi-box-list-alamat">
            <div className="nama-alamat">Arsenius Agung M</div>
            <div className="no-telp">087884387736</div>
            <div className="alamat">
              Jl. Limo No.40, RT.8/RW.10, Grogol Sel., Kec. Kby. Lama, Jakarta
              Selatan
            </div>
            <div className="ubah-alamat">
              <button className="btn-ubah-alamat">Ubah Alamat</button>
            </div>
          </div>
        </div>

        <div className="box-list-alamat">
          <div className="judul-header-list-alamat">Rumah Tyo </div>
          
          <div className="isi-box-list-alamat">
            <div className="nama-alamat">Dominikus Linestyo</div>
            <div className="no-telp">087994386636</div>
            <div className="alamat">
              Jl. Limo No.40, RT.8/RW.10, Grogol Sel., Kec. Kby. Lama, Jakarta
              Selatan
            </div>
            <div className="ubah-alamat">
              <button className="btn-ubah-alamat">Ubah Alamat</button>
            </div>
          </div>
        </div>

        <div className="box-list-alamat">
          <div className="judul-header-list-alamat">Rumah Renaldi </div>

          <div className="isi-box-list-alamat">
            <div className="nama-alamat">Renaldi Fernandi</div>
            <div className="no-telp">087884387736</div>
            <div className="alamat">
              Jl. Limo No.40, RT.8/RW.10, Grogol Sel., Kec. Kby. Lama, Jakarta
              Selatan
            </div>
            <div className="ubah-alamat">
              <button className="btn-ubah-alamat">Ubah Alamat</button>
            </div>
          </div>
        </div>

        <div className="pilih-alamat">
          <button className="btn-pilih-alamat">Pilih Alamat</button>
        </div>
      </div>
    </div>
  );
}

export default DaftarAlamat;
