import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.css";

function Checkout() {
  let navigate = useNavigate();

  return (
    <div className="body-payment">
      <div className="container-payment">
        <div className="judul-halaman">
          <iconbutton
            className="kembali"
            onClick={() => navigate("/digital-resep")}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </iconbutton>

          <span className="nama-judul">Checkout </span>
        </div>

        <div className="header-address">
          <div className="jalan">
            <div className="judul-header-address">Address</div>

            <div className="jalan-user">
              <p className="alamat-user">
                Jl. Limo No.40, RT.8/RW.10, Grogol Sel., Kec. Kby. Lama, Jakarta
                Selatan
              </p>
              <iconbutton
                className="change"
                onClick={() => navigate("/daftar-alamat")}
              >
                <i className="fa-solid fa-square-caret-down"></i>
              </iconbutton>
            </div>
          </div>

          {/* <div className="note">
            Add a note
            <i className="fa-solid fa-notes"></i>
            <input
              className="input-note"
              placeholder="Example : Near the Century Building, ect"
            />
          </div> */}
        </div>

        <div className="content-payment">
          <div className="box-list-payment">
            <span className="judul-payment-method">Choose Payment Method</span>

            <div className="top-list-payment">
              <div className="list-payment">
                <div className="rd-payment-method">
                  <input
                    className="rd-option"
                    id="option"
                    type="radio"
                    name="field"
                    value="option"
                  />
                  <img
                    src="assets/img/ovo.png"
                    alt=""
                    className="logo-payment"
                  />

                  <div className="harga-option">
                    <label htmlFor="option" className="rd-label">
                      OVO
                    </label>
                    <br />
                    <label htmlFor="option" className="rd-harga">
                      Rp.100.000
                    </label>
                  </div>
                </div>
              </div>

              <div className="list-payment">
                <div className="rd-payment-method">
                  <input
                    className="rd-option"
                    id="option"
                    type="radio"
                    name="field"
                    value="option"
                  />
                  <img
                    src="assets/img/gopay.png"
                    alt=""
                    className="logo-payment"
                  />

                  <div className="harga-option">
                    <label htmlFor="option" className="rd-label">
                      Gopay
                    </label>
                    <br />
                    <label htmlFor="option" className="rd-harga">
                      Rp.100.000
                    </label>
                  </div>
                </div>
              </div>

              <div className="list-payment">
                <div className="rd-payment-method">
                  <input
                    className="rd-option"
                    id="option"
                    type="radio"
                    name="field"
                    value="option"
                  />
                  <img
                    src="assets/img/dana.png"
                    alt=""
                    className="logo-payment"
                  />

                  <div className="harga-option">
                    <label htmlFor="option" className="rd-label">
                      Dana
                    </label>
                    <br />
                    <label htmlFor="option" className="rd-harga">
                      Rp.100.000
                    </label>
                  </div>
                </div>
              </div>

              <div className="list-payment">
                <div className="rd-payment-method">
                  <input
                    className="rd-option"
                    id="option"
                    type="radio"
                    name="field"
                    value="option"
                  />
                  <img
                    src="assets/img/bank.png"
                    alt=""
                    className="logo-payment"
                  />

                  <div className="harga-option">
                    <label htmlFor="option" className="rd-label">
                      Bank Transfer
                    </label>
                    <br />
                    <label htmlFor="option" className="rd-harga">
                      Rp.100.000
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-order">
          <div className="dekripsi-total">
            <div className="total-footer">
              <div className="total-price"> Total Price</div> <br />
              <div className="deskripsi-total-price">
                Medicine Price
                <br />
                Delivery Service
                <br />
                Discount
                <br />
                Payment Method
              </div>
            </div>

            <div className="nominal-deskripsi">
              <div className="nominal-total-price">Rp. 90.000</div> <br />
              <div className="deskripsi-total-price">
                Rp.80.000
                <br />
                Rp.10.000
                <br />
                0
                <br />
                Gopay
              </div>
            </div>
          </div>

          <div className="btn-order">
            <button className="order">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
