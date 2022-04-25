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

  var [dataPasien, setDataPasien] = useState([]);

  var [totalHarga, setTotalHarga] = useState("");

  const [resepdataHeader, setResepDataHeader] = useState([]);
  const [resepDataDetail, setResepDataDetail] = useState([]);
  const [detailCheckout, setDetailCheckout] = useState([]);

  // useEffect(() => {
  //   var url = ``;

  //   axios.get(url).then((response) => {
  //     console.log("resp", response);

  //     if (response.data.data !== "") {
  //       setNamaDokter(response.data.data.nama_dokter);
  //       setRumahSakit(response.data.data.rumah_sakit);
  //       setSpesialis(response.data.data.spesialis);
  //     } else {
  //       setNamaDokter("");
  //       setRumahSakit("");
  //       setSpesialis("");
  //     }
  //   });
  // }, []);

  useEffect(() => {
    if (resepdataHeader.length !== 0) {
      var url = `https://staging-api.cfu.pharmalink.id/ppds/prescription/patient?id=${resepdataHeader.PatientID}`;

      axios
        .get(url)
        .then((response) => {
          console.log("resp", response);

          if (response.data.data !== null || response.data.data !== undefined) {
            setDataPasien([response.data.data]);
          } else {
            setDataPasien([]);
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }, [resepdataHeader]);

  useEffect(() => {
    var url = `https://staging-api.cfu.pharmalink.id/ppds/prescription/prescription?id=1`;

    axios.get(url).then((response) => {
      console.log("resp", response);

      if (response.data.data !== undefined || response.data.data !== null) {
        setResepDataHeader(response.data.data);
        setResepDataDetail(response.data.data.detail);
        setDetailCheckout(response.data.data.detail);
      }
    });
  }, []);

  // useEffect(() => {
  //   var url = ``;

  //   axios.get(url).then((response) => {
  //     console.log("resp", response);

  //     if (response.data.data !== "") {
  //       setTotalHarga(response.data.data.total_harga);
  //     } else {
  //       setTotalHarga("");
  //     }
  //   });
  // }, []);

  function handleCheckDetail(data) {
    var tempArr = [...detailCheckout];
    if (tempArr.includes(data)) {
      var filteredArr = tempArr.filter(
        (item) => item.ProductID !== data.ProductID
      );
      console.log("masuk if", filteredArr);
      setDetailCheckout(filteredArr);
    } else {
      tempArr.push(data);
      console.log("masuk else", tempArr); 
      setDetailCheckout(tempArr);
    }
  }

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
                Tanggal Lahir <br />
                Jenis Kelamin
                <br />
                Berat
              </div>
              {dataPasien &&
                dataPasien.map((item) => (
                  <div className="nama-pasien">
                    <div className="style-nama-pasien">
                      {item.PatientName}
                      <br />
                    </div>
                    {item.PatientDOB}
                    <br />
                    {item.PatientGender}
                    <br />
                    {item.Berat} Kg
                  </div>
                ))}
            </div>
          </div>

          <div className="overflow-obat">
            {resepDataDetail &&
              resepDataDetail.map((item) => (
                <div className="list-obat">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      value={item}
                      checked={detailCheckout.includes(item)}
                      onChange={() => handleCheckDetail(item)}
                    />
                    <span className="check"></span>
                  </div>

                  <img
                    src={GambarAmoxicilin}
                    alt=""
                    className="gambar-produk"
                  />

                  <div className="deskripsi-obat">
                    <div className="header-list">
                      <p className="box-nama-obat">{item.ProductID}</p>
                      <h3 className="box-harga-obat">
                        Rp. {item.SaleUnit * item.QuantityOrder}
                      </h3>
                    </div>
                    <div className="box-resep">
                      <div className="style-cara-pakai">
                        {item.QuantityUsePerDay} per Hari Total
                        <br />
                        {item.GivingQuantity} Tablet
                        <br />
                        Waktu: {item.TimeToUse} <br />
                        Masa Berlaku : {item.expDate}
                      </div>
                    </div>
                  </div>

                  <p className="jumlah-obat">{item.QuantityOrder}</p>
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
            <button
              onClick={() =>
                navigate("/checkout", {
                  state: detailCheckout,
                })
              }
              className="checkout"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalResep;
