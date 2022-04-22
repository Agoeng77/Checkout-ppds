import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./DaftarAlamat.css";

function DaftarAlamat() {
  let navigate = useNavigate();

  const [daftarAlamat, setDaftarAlamat] = useState([
    {
      judulAlamat: "Rumah Agung",
      namaPenerima: "Arsenius Agung ",
      noTelp: "087884398725",
      alamat:
        " Jl. Limo No.40, RT.8/RW.10, Grogol Sel., Kec. Kby. Lama, Jakarta Selatan",
      note: "Rumah Pagar Hijau",
    },
    {
      judulAlamat: "Rumah Dominikus",
      namaPenerima: "Dominikus Linestyo",
      noTelp: "087884398725",
      alamat:
        " Jl. Limo No.40, RT.8/RW.10, Grogol Sel., Kec. Kby. Lama, Jakarta Selatan",
      note: "Rumah Pagar Hijau",
    },
    {
      judulAlamat: "Rumah Ryo",
      namaPenerima: "Ryo Gunawan",
      noTelp: "087884398725",
      alamat:
        " Jl. Limo No.40, RT.8/RW.10, Grogol Sel., Kec. Kby. Lama, Jakarta Selatan",
      note: "Rumah Pagar Hijau",
    },
  ]);

  useEffect(() => {
    var url = ``;

    axios.get(url).then((response) => {
      console.log("resp", response);

      if (response.data.data !== "") {
        setDaftarAlamat(response.data.data);
      } else {
      }
    });
  }, []);

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
          daftarAlamat.map((item) => (
            <div className="box-list-alamat">
              <div className="judul-header-list-alamat">
                {item.judulAlamat}{" "}
              </div>

              <div className="isi-box-list-alamat">
                <div className="nama-alamat">{item.namaPenerima}</div>
                <div className="no-telp">{item.noTelp}</div>
                <div className="alamat">{item.alamat}</div>
                <div className="note-alamat">{item.note}</div>
                <div className="ubah-alamat">
                  <button className="btn-ubah-alamat">Ubah Alamat</button>
                </div>
              </div>
            </div>
          ))}

        <div className="pilih-alamat">
          <button className="btn-pilih-alamat">Pilih Alamat</button>
        </div>
      </div>
    </div>
  );
}

export default DaftarAlamat;
