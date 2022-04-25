import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Checkout.css";
import GambarOvo from "./ovo.png";
import GambarBank from "./bank.png";

function Checkout() {
  let navigate = useNavigate();

  var [totalPrice, setTotalPrice] = useState(0);
  var [medicinePrice, setMedicinePrice] = useState(0);
  var [deliveryService, setDeliveryService] = useState(10000);
  var [discount, setDiscount] = useState(0);
  var [metodeBayar, setMetodeBayar] = useState("");

  var [address, setAddress] = useState(
    window.sessionStorage.getItem("defaultAlamat")
      ? JSON.parse(window.sessionStorage.getItem("defaultAlamat"))
      : []
  );

  const [listPaymentMethod, setListPaymentMethod] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState([]);
  const [listVirtualAccount, setListVirtualAccount] = useState([]);
  const [selectedVirtualAccount, setSelectedVirtualAccount] = useState([]);
  const [detailCheckout, setDetailCheckout] = useState(
    window.sessionStorage.getItem("checkoutList")
      ? JSON.parse(window.sessionStorage.getItem("checkoutList"))
      : []
  );

  let location = useLocation();

  useEffect(() => {
    console.log("location", location);
    if (location.state !== null) {
      setDetailCheckout(location.state);
      window.sessionStorage.setItem(
        "checkoutList",
        JSON.stringify(location.state)
      );
    }
  }, []);

  useEffect(() => {
    console.log("address", address);
  }, [address]);

  useEffect(() => {
    if (detailCheckout.length !== 0) {
      var tempArr = [...detailCheckout];
      var tempTotal = 0;
      for (let i = 0; i < tempArr.length; i++) {
        tempTotal += tempArr[i].SaleUnit * tempArr[i].QuantityOrder;
      }
      setMedicinePrice(tempTotal);
    }
  }, [detailCheckout]);

  useEffect(() => {
    var url = `https://staging-api.cfu.pharmalink.id/nicepay/ppds?find=paymentmethod`;

    axios.get(url).then((response) => {
      console.log("resp", response);

      if (response.data.data !== undefined && response.data.data !== null) {
        setListPaymentMethod(response.data.data);
      }
    });
  }, []);

  useEffect(() => {
    var url = `https://staging-api.cfu.pharmalink.id/nicepay/ppds?find=vacclist`;
    axios
      .get(url)
      .then((response) => {
        if (response.data.data !== undefined && response.data.data !== null) {
          setListVirtualAccount(response.data.data);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  useEffect(() => {
    if (selectedPaymentMethod.length !== 0) {
      console.log("payment method", JSON.parse(selectedPaymentMethod));
    }

    if (selectedVirtualAccount.length !== 0) {
      console.log("Virtual Account", JSON.parse(selectedVirtualAccount));
    }
  }, [selectedPaymentMethod, selectedVirtualAccount]);

  function Order() {
    var url;
    var postObj;
    var parsedPaymentType = JSON.parse(selectedPaymentMethod);
    console.log("parsed payment type", parsedPaymentType);

    if (parsedPaymentType.MethodID === 1) {
      url = "https://staging-api.cfu.pharmalink.id/nicepay/payment?method=OVO";
      postObj = {
        OrderID: "12345",
        OrderTotalPrice: medicinePrice + deliveryService,
        MemberID: "M001",
        MemberPhone: "087788842861",
        Address: address.AddressFull,
        AddressCity: address.CityName,
        AddressDistrict: address.SubDistrictName,
        AddressPostalCode: address.PostalCode,
        BankID: "",
        ProjectName: "PPDS",
      };
    } else {
      var parsedVirtualAccount = JSON.parse(selectedVirtualAccount);
      url =
        "https://staging-api.cfu.pharmalink.id/nicepay/payment?method=VACC  ";
      postObj = {
        OrderID: "12345",
        OrderTotalPrice: medicinePrice + deliveryService,
        MemberID: "M001",
        MemberPhone: "087788842861",
        Address: address.AddressFull,
        AddressCity: address.CityName,
        AddressDistrict: address.SubDistrictName,
        AddressPostalCode: address.PostalCode,
        BankID: parsedVirtualAccount.BankID,
        ProjectName: "PPDS",
      };
    }

    console.log("url", url);
    console.log("post obj", postObj);

    axios
      .post(url, postObj)
      .then((response) => {
        console.log("response post order", response);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function returnListVirtualAccount() {
    if (selectedPaymentMethod.length !== 0) {
      if (JSON.parse(selectedPaymentMethod).MethodID === 2) {
        return (
          listVirtualAccount &&
          listVirtualAccount.map((item) => (
            <div className="list-payment">
              <div className="rd-payment-method">
                <input
                  className="rd-option"
                  id="option"
                  type="radio"
                  name="field"
                  // value={JSON.stringify(item)}
                  value={JSON.stringify(item)}
                  onChange={(e) => setSelectedVirtualAccount(e.target.value)}
                />
                <img
                  src={item.ImageURL}
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                  className="logo-payment"
                />

                <div className="harga-option">
                  <label htmlFor="option" className="rd-label">
                    {item.VACCName}
                  </label>
                  <br />
                  <label htmlFor="option" className="rd-harga">
                    Rp.{medicinePrice + deliveryService}
                  </label>
                </div>
              </div>
            </div>
          ))
        );
      }
    }
  }

  function returnMetodeBayar() {
    if (selectedPaymentMethod.length !== 0) {
      if (JSON.parse(selectedPaymentMethod).MethodID === 1) {
        return "Ovo";
      } else if (JSON.parse(selectedPaymentMethod).MethodID === 2) {
        if (selectedVirtualAccount.length !== 0) {
          return JSON.parse(selectedVirtualAccount).VACCName;
        } else {
          return "Virtual Account";
        }
      }
    }
  }

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
              <p className="alamat-user">{address.AddressFull}</p>
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
            <div className="box-choose-payment">
              <span className="judul-payment-method">
                Choose Century Outlet
              </span>

              <div className="list-payment">
                <div className="rd-choose-outlet">
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
                      Century Jakarta Selatan
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="line-choose-century"></div>

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
                          value={JSON.stringify(item)}
                          onChange={(e) =>
                            setSelectedPaymentMethod(e.target.value)
                          }
                        />
                        <img
                          src={item.MethodID === 1 ? GambarOvo : GambarBank}
                          alt=""
                          className="logo-payment"
                        />

                        <div className="harga-option">
                          <label htmlFor="option" className="rd-label">
                            {item.MethodName}
                          </label>
                          <br />
                          <label htmlFor="option" className="rd-harga">
                            Rp.{medicinePrice + deliveryService}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                {returnListVirtualAccount()}
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
              <div className="nominal-total-price">
                {medicinePrice + deliveryService}
              </div>{" "}
              <br />
              <div className="deskripsi-total-price">
                {medicinePrice}
                <br />
                {deliveryService}
                <br />
                {discount}
                <br />
                {returnMetodeBayar()}
              </div>
            </div>
          </div>

          <div className="btn-order">
            <button className="order" onClick={() => Order()}>
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
