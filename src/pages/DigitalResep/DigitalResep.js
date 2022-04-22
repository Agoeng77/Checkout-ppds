import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./DigitalResep.css";
import GambarAmoxicilin from "./amoxcillin.png";
import GambarParacetamol from "./download.jpeg";
import GambarVitaminC from "./vitaminC.png";

function DigitalResep() {
  let navigate = useNavigate();

  var [namaDokter, setNamaDokter] = useState("");
  var [rumahSakit, setRumahSakit] = useState("");
  var [spesialis, setSpesialis] = useState("");

  var [namaPasien, setNamaPasien] = useState("");
  var [umurPasien, setUmurPasien] = useState("");
  var [genderPasien, setGenderPasien] = useState("");


  var [totalHarga, setTotalHarga] = useState("");

  const [resepdata, setresepdata] = useState([
    {
      namaObat: "Paracetamol",
      gambarObat: GambarParacetamol,
      harga: 30000,
      caraPemakaian: " 2x 1 Tablet- Setelah Makan",
      waktuPemakaian: "Pagi Malam",
      expDate: "23/02/2023",
      jumlahObat: "2strip",
    },
    {
      namaObat: "Amoxilin",
      gambarObat: GambarAmoxicilin,
      harga: 30000,
      caraPemakaian: " 2x 1 Tablet- Setelah Makan",
      waktuPemakaian: "Pagi Malam",
      expDate: "23/02/2023",
      jumlahObat: "2 strip",
    },
    {
      namaObat: "Vitamin C",
      gambarObat: GambarVitaminC,
      harga: 30000,
      caraPemakaian: " 2x 1 Tablet- Setelah Makan",
      waktuPemakaian: "Pagi Malam",
      expDate: "23/02/2023",
      jumlahObat: "2 strip",
    },
    {
      namaObat: "Amoxilin",
      gambarObat: GambarAmoxicilin,
      harga: 30000,
      caraPemakaian: " 2x 1 Tablet- Setelah Makan",
      waktuPemakaian: "Pagi Malam",
      expDate: "23/02/2023",
      jumlahObat: "2 strip",
    },
    {
      namaObat: "Vitamin C",
      gambarObat: GambarVitaminC,
      harga: 30000,
      caraPemakaian: " 2x 1 Tablet- Setelah Makan",
      waktuPemakaian: "Pagi Malam",
      expDate: "23/02/2023",
      jumlahObat: "2strip",
    },
  ]);

  useEffect(() => {
    var url = ``;

    axios.get(url).then((response) => {
      console.log("resp", response);

      if (response.data.data !== "") {
        setNamaDokter(response.data.data.nama_dokter);
        setRumahSakit(response.data.data.rumah_sakit);
        setSpesialis(response.data.data.spesialis);
      } else {
        setNamaDokter("");
        setRumahSakit("");
        setSpesialis("");
      }
    });
  }, []);

  useEffect(() => {
    var url = ``;

    axios.get(url).then((response) => {
      console.log("resp", response);

      if (response.data.data !== "") {
        setNamaPasien(response.data.data.nama_pasien);
        setUmurPasien(response.data.data.umur_pasien);
        setGenderPasien(response.data.data.gender_pasien);
      } else {
        setNamaPasien("");
        setUmurPasien("");
        setGenderPasien("");
      }
    });
  }, []);

  useEffect(() => {
    var url = ``;

    axios.get(url).then((response) => {
      console.log("resp", response);

      if (response.data.data !== "") {
        setresepdata(response.data.data);
        
      } else {
        
      }
    });
  }, []);

  useEffect(() => {
    var url = ``;

    axios.get(url).then((response) => {
      console.log("resp", response);

      if (response.data.data !== "") {
        setTotalHarga(response.data.data.total_harga);
      } else {
        setTotalHarga("");
      }
    });
  }, []);

  return (
    <div className="body">
      <div className="header">
        <div className="judul-halaman">
          <span className="nama-judul">Digital Resep </span>
        </div>
        <div className="content-header">
          <img src="assets/img/profile.png" alt="" className="profile-dokter" />
          <div className="deskripsi-dokter">
            {namaDokter} Dominikus Vieri Linestyo
            <br />
            <div className="deskripsi-rs-ahli">
              {rumahSakit} Rs. Siloam
              <br />
              {spesialis} THT, Spesialis anak
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container-content">
          <div className="header-pasien">
            <div className="user">
              <div className="pasien">
                <div className="style-nama-pasien">
                  Nama pasien <br />
                </div>
                Umur <br />
                Gender
              </div>
              <div className="nama-pasien">
                <div className="style-nama-pasien">
                  {namaPasien} Arsenius Agung M <br />
                </div>
                {umurPasien} 20 <br />
                {genderPasien} Pria
              </div>
            </div>
          </div>

          <div className="overflow-obat">
            {resepdata &&
              resepdata.map((item) => (
                <div className="list-obat">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="check"></span>
                  </div>

                  <img src={item.gambarObat} alt="" className="gambar-produk" />

                  <div className="deskripsi-obat">
                    <div className="header-list">
                      <p className="box-nama-obat">{item.namaObat}</p>
                      <h3 className="box-harga-obat">{item.harga}</h3>
                    </div>
                    <div className="box-resep">
                      <div className="style-cara-pakai">
                        {item.caraPemakaian}
                        <br />
                        Waktu: {item.waktuPemakaian} <br />
                        Masa Berlaku : {item.expDate}
                      </div>
                    </div>
                  </div>

                  <p className="jumlah-obat">{item.jumlahObat}</p>
                </div>
              ))}
          </div>

          <div className="total-harga">
            {totalHarga} Total Harga
            <span className="nominal-total">Rp.90.000</span>
          </div>

          <div className="download-checkout">
            <button className="dowload-pdf">Download PDF</button>
            <div className="style-or">Or</div>
            <button onClick={() => navigate("/checkout")} className="checkout">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalResep;
