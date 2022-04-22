import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Checkout.css";
import GambarOvo from "./ovo.png";

function Checkout() {
  let navigate = useNavigate();

  var [totalPrice, setTotalPrice] = useState("");
  var [medicinePrice, setMedicinePrice] = useState("");
  var [deliveryService, setDeliveryService] = useState("");
  var [discount, setDiscount] = useState("");
  var [metodeBayar, setMetodeBayar] = useState("");

  var [address, setAddress] = useState("");

  const [listPaymentMethod, setListPaymentMethod] = useState([
    {
      listPaymentMethod: "Ovo",
      totalBayar: 90000,
      gambarPayment: GambarOvo,
    },
  ]);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  useEffect(() => {
    var url = ``;

    axios.get(url).then((response) => {
      console.log("resp", response);

      if (response.data.data !== "") {
        setListPaymentMethod(response.data.data);
      } else {
      }
    });
  }, []);

  useEffect(() => {
    var url = ``;

    axios.get(url).then((response) => {
      console.log("resp", response);

      if (response.data.data !== "") {
        setTotalPrice(response.data.data.total_price);
        setMedicinePrice(response.data.data.medicine_price);
        setDeliveryService(response.data.data.delivery_service);
        setDiscount(response.data.data.discount);
        setMetodeBayar(response.data.dat.metode_bayar);
      } else {
        setTotalPrice("");
        setMedicinePrice("");
        setDeliveryService("");
        setDiscount("");
        setMetodeBayar("");
      }
    });
  }, []);

  // useEffect(() => {
  //   if (selectedPaymentMethod.length !== 0) {
  //     console.log("selected payment method", JSON.parse(selectedPaymentMethod));
  //   }
  // }, [selectedPaymentMethod]);

  useEffect(() => {
    if (selectedPaymentMethod.length !== 0) {
      console.log("selected payment method", selectedPaymentMethod);
    }
  }, [selectedPaymentMethod]);

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

          <div className="line-address"></div>

          <div className="content-payment">
            <div className="box-list-payment">
              <span className="judul-payment-method">
                Choose Payment Method
              </span>

              <div className="top-list-payment">
                {listPaymentMethod &&
                  listPaymentMethod.map((item) => (
                    <div className="list-payment">
                      <div className="rd-payment-method">
                        <input
                          className="rd-option"
                          id="option"
                          type="radio"
                          name="field"
                          // value={JSON.stringify(item)}
                          value="OVO"
                          onChange={(e) =>
                            setSelectedPaymentMethod(e.target.value)
                          }
                        />
                        <img
                          src={item.gambarPayment}
                          alt=""
                          className="logo-payment"
                        />

                        <div className="harga-option">
                          <label htmlFor="option" className="rd-label">
                            {item.listPaymentMethod}
                          </label>
                          <br />
                          <label htmlFor="option" className="rd-harga">
                            Rp.{item.totalBayar}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}

                {/* <div className="list-payment">
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

                  <div className="line-total-price"></div>
                </div>*/}
              </div>
            </div>
          </div>

          <div className="line-total-price"></div>
          <div className="deskripsi-total">
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
              <div className="nominal-total-price">{totalPrice} Rp. 90.000</div>{" "}
              <br />
              <div className="deskripsi-total-price">
                {medicinePrice} Rp.80.000
                <br />
                {deliveryService} Rp.10.000
                <br />
                {discount} 0
                <br />
                {metodeBayar} Ovo
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
