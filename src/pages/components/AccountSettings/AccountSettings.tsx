import React from "react";
import FooterMain from "../Footer/FooterMain";
import JSNavbar from "../Header/JSNavbar";
import AccountSettingsForm from "./AccountSettingsForm";
import { useState, useEffect, useContext } from "react";
import { Alerts } from "../../../Context/Alert";
import Data from "../../../Api";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const AccountSettings = () => {
  const [cookies, setCookie] = useCookies(["authentificatedUser"]);
  const [id, setId] = useState(cookies.authentificatedUser.id);
  const [city, setCity] = useState(String);
  const [country, setCountry] = useState(String);
  const [email, setEmail] = useState(String);
  const [fullName, setName] = useState(String);
  const [phone, setPhone] = useState(String);
  const [postalCode, setPostalCode] = useState(String);
  const [province, setProvince] = useState(String);
  const [adress, setAdress] = useState(String);
  const [err, setErr] = useState(Array<string>);
  const { alert, setAlert } = useContext(Alerts);
  const navigate = useNavigate();
  const api = new Data();
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validName = new RegExp(
    "^([a-zA-Z]+[',.-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[',.-]?[a-zA-Z ]+)+$"
  );

  var validZip = new RegExp("^[0-9]{6,6}$");

  var validPhone = new RegExp("^[0-9]{10,10}$");

  const handleChanger = (
    fullName: string,
    email: string,
    billingAdress: string,
    country: string,
    phone: string,
    province: string,
    city: string,
    postalCode: string
  ) => {
    setName(fullName);
    setEmail(email);
    setAdress(billingAdress);
    setCountry(country);
    setPhone(phone);
    setProvince(province);
    setCity(city);
    setPostalCode(postalCode);
  };

  const check = () => {
    setErr([]);

    if (fullName == "") {
      setErr((prev) => {
        return [...prev, "Name is required"];
      });
    } else if (!validName.test(fullName)) {
      setErr((prev) => {
        return [...prev, "The name is not valid"];
      });
    }

    if (province == "") {
      setErr((prev) => {
        return [...prev, "Province is required"];
      });
    }

    if (city == "") {
      setErr((prev) => {
        return [...prev, "City is required"];
      });
    }

    if (postalCode == "") {
      setErr((prev) => {
        return [...prev, "Postal code required is required"];
      });
    } else if (!validZip.test(postalCode)) {
      setErr((prev) => {
        return [...prev, "Postal code is not valid"];
      });
    }

    if (country == "") {
      setErr((prev) => {
        return [...prev, "Country is required"];
      });
    }

    if (adress == "") {
      setErr((prev) => {
        return [...prev, "Street adress is required"];
      });
    }

    if (phone == "") {
      setErr((prev) => {
        return [...prev, "Phone is required"];
      });
    } else if (!validPhone.test(phone)) {
      setErr((prev) => {
        return [...prev, "Phone number is not valid , must contain 10 leters"];
      });
    }

    if (email == "") {
      setErr((prev) => {
        return [...prev, "Email is required"];
      });
    } else if (!validEmail.test(email)) {
      setErr((prev) => {
        return [...prev, "The email adress is not valid!"];
      });
    }
  };

  const updateAccount = async () => {
    check();

    if (err.length === 0) {
      const response = await api.updateUser({
        id,
        fullName,
        email,
        adress,
        country,
        phone,
        province,
        city,
        postalCode,
      });

      if (response.status === 200) {
        setAlert(["Account updated succesfuly"]);
        // navigate("/");
      } else if (response.status === 400) {
        setErr(["Email already registered"]);
      } else if (response.status === 401) {
        setErr(["Phone number already in use"]);
      }
    } else {
      setAlert(err);
    }
  };

  useEffect(() => {
    check();
  }, [fullName, email, adress, country, phone, province, city, postalCode]);

  return (
    <>
      <JSNavbar />
      <AccountSettingsForm
        handleChanger={handleChanger}
        err={err}
        UpdateAccount={updateAccount}
      />
      <div className="alerts">
        {alert.length > 0 ? (
          err.map((e) => {
            return (
              <div
                className="alertMsg bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-[20%]"
                role="alert"
              >
                <span className="block sm:inline">{e}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
              </div>
            );
          })
        ) : (
          <p className="none"></p>
        )}
      </div>
      <FooterMain />
    </>
  );
};

export default AccountSettings;
