import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DigitalResep.css";

function DigitalResep() {
  let navigate = useNavigate();

  return (
    <div className="body">
      <div className="header">
        <div className="judul-halaman">
          <span className="nama-judul">Digital Resep </span>
        </div>

        <div className="content-header">
          <img src="assets/img/profile.png" alt="" className="profile-dokter" />
          <div className="deskripsi-dokter">
            Dr.Dominikus Linestyo
            <br />
            <div className="deskripsi-rs-ahli">
              Rs. Siloam
              <br />
              THT, Spesialis anak
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
                  Arsenius Agung M <br />
                </div>
                20 <br />
                Pria
              </div>
            </div>
          </div>

          <div className="list-obat">
            {/* <iconbutton className="btn-delete">
            <img src="assets/img/trash1.png" alt="" className="gbr-trash" />
          </iconbutton> */}

            <div className="checkbox">
              <input type="checkbox" />
              <span className="check"></span>
            </div>

            <img
              src="assets/img/download.jpeg"
              alt=""
              className="gambar-produk"
            />

            <div className="deskripsi-obat">
              <div className="header-list">
                <p className="box-nama-obat">Paracetamol</p>
                <h3 className="box-harga-obat">30.000</h3>
              </div>
              <div className="box-resep">
                <div className="style-cara-pakai">
                  2x 1 Tablet- Setelah Makan <br />
                  Waktu: Pagi Malam <br />
                  Masa Berlaku : 23/02/2023
                </div>
                {/* <h3 className="box-harga-obat">30.000</h3> */}
              </div>
            </div>

            <p className="jumlah-obat">2 Strip</p>
          </div>

          <div className="list-obat">
            <div className="checkbox">
              <input type="checkbox" />
            </div>

            <img
              src="assets/img/amoxcillin.png"
              alt=""
              className="gambar-produk"
            />
            <div className="deskripsi-obat">
              <div className="header-list">
                <p className="box-nama-obat">Amoxcillin</p>
                <h3 className="box-harga-obat">30.000</h3>
              </div>
              <div className="box-resep">
                <div className="style-cara-pakai">
                  2x 1 Tablet- Setelah Makan <br />
                  Waktu: Pagi Malam <br />
                  Masa Berlaku : 23/02/2023
                </div>
                {/* <h3 className="box-harga-obat">30.000</h3> */}
              </div>
            </div>

            <p className="jumlah-obat">2 Strip</p>
          </div>

          <div className="list-obat">
            <div className="checkbox">
              <input type="checkbox" />
            </div>

            <img
              src="assets/img/vitaminC.png"
              alt=""
              className="gambar-produk"
            />

            <div className="deskripsi-obat">
              <div className="header-list">
                  <p className="box-nama-obat">Vitamin C</p>
                  <h3 className="box-harga-obat">30.000</h3>
              </div>
              <div className="box-resep">
                <div className="style-cara-pakai">
                  2x 1 Tablet- Setelah Makan <br />
                  Waktu: Pagi Malam <br />
                  Masa Berlaku : 23/02/2023
                </div>
                {/* <h3 className="box-harga-obat">30.000</h3> */}
              </div>
            </div>
            <p className="jumlah-obat">2 Strip</p>
          </div>

          <div className="total-harga">
            Total Harga
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
