import React from "react";
import { useNavigate } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import styles from "./DigitalResep.css";

function DigitalResep() {
  let navigate = useNavigate();
  return (
    <div className="body">
      <div className="header">
        <div className="judul-halaman">
          <button className="kembali" onclick="location.href='#'">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <span className="nama-judul">Digital Resep </span>
        </div>

        <div className="content-header">
          <img src="assets/img/profile.png" alt="" className="profile-dokter" />
          <div className="deskripsi-dokter">
            Dr.Dominikus Linestyo
            <br />
            Rs. Siloam
            <br />
            THT, Spesialis anak
            <br />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="header-pasien">
          <div className="user">
            <div className="pasien">
              Nama pasien <br />
              Umur <br />
              Gender <br />
            </div>
            <div className="nama-pasien">
              Arsenius Agung M <br />
              20 <br />
              Pria
            </div>
          </div>
        </div>

        <div className="list-obat">
          <button className="btn-delete">
            <img src="assets/img/trash1.png" alt="" className="gbr-trash" />
          </button>

          <img
            src="assets/img/download.jpeg"
            alt=""
            className="gambar-produk"
          />

          <div className="deskripsi-obat">
            <div className="box-resep">
              <p className="box-nama-obat">Paracetamol</p>
              2x 1 Tablet- Setelah Makan <br />
              Waktu: Pagi Malam <br />
              Masa Berlaku : 23/02/2023
              <h3 className="box-harga-obat">30.000</h3>
            </div>
          </div>

          <p className="jumlah-obat">2 Strip</p>
        </div>

        <div className="list-obat">
          <button className="btn-delete">
            <img src="assets/img/trash1.png" alt="" className="gbr-trash" />
          </button>

          <img
            src="assets/img/amoxcillin.png"
            alt=""
            className="gambar-produk"
          />
          <div className="deskripsi-obat">
            <div className="box-resep">
              <p className="box-nama-obat">Amoxcillin</p>
              2x 1 Tablet- Setelah Makan <br />
              Waktu: Pagi Malam <br />
              Masa Berlaku : 23/02/2023 <br />
              <h3 className="box-harga-obat">30.000</h3>
            </div>
          </div>

          <p className="jumlah-obat">2 Strip</p>
        </div>

        <div className="list-obat">
          <button className="btn-delete">
            <img src="assets/img/trash1.png" alt="" className="gbr-trash" />
          </button>

          <img src="assets/img/vitaminC.png" alt="" className="gambar-produk" />

          <div className="deskripsi-obat">
            <div className="box-resep">
              <p className="box-nama-obat">Vitamin C</p>
              2x 1 Tablet- Setelah Makan
              <br />
              Waktu: Pagi Malam
              <br />
              Masa Berlaku : 23/02/2023
              <br />
              <h3 className="box-harga-obat">30.000</h3>
            </div>
          </div>
          <p className="jumlah-obat">2 Strip</p>
        </div>

        <div className="total-harga">
          <span>Total Harga</span>
          <span className="nominal-total">Rp.90.000</span>
        </div>

        <div className="download-checkout">
          <button className="dowload-pdf">Download PDF</button>
          Or
          <button onClick={() => navigate("/checkout")} className="checkout">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default DigitalResep;
