import React, { useEffect, useState } from "react";

interface Functions {
  handleChanger: (
    fullName: string,
    email: string,
    password: string,
    confirmPass: string,
    billingAdress: string,
    country: string,
    phone: string,
    city: string,
    province: string,
    postalCode: string
  ) => void;

  err: Array<String>;

  createAccount: () => void;
}

const RegisterBody: React.FC<Functions> = ({
  handleChanger,
  createAccount,
  err,
}: Functions) => {
  const [fullName, setFullName] = useState(String);
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [confirmPass, setConfirmPass] = useState(String);
  const [streetAdress, setAdress] = useState(String);
  const [country, setCountry] = useState("Romania");
  const [province, setProvince] = useState(String);
  const [postalCode, setPostal] = useState(String);
  const [city, setCity] = useState(String);
  const [phone, setPhone] = useState(String);

  const onChange = (e: React.FormEvent<HTMLDivElement>) => {
    let obj = e.target as HTMLInputElement;

    if (obj.classList.contains("name")) {
      setFullName(obj.value);
    } else if (obj.classList.contains("email")) {
      setEmail(obj.value);
    } else if (obj.classList.contains("password")) {
      setPassword(obj.value);
    } else if (obj.classList.contains("confirmPass")) {
      setConfirmPass(obj.value);
    } else if (obj.classList.contains("adress")) {
      setAdress(obj.value);
    } else if (obj.classList.contains("phone")) {
      setPhone(obj.value);
    } else if (obj.classList.contains("country")) {
      setCountry(obj.value);
    } else if (obj.classList.contains("province")) {
      setProvince(obj.value);
    } else if (obj.classList.contains("city")) {
      setCity(obj.value);
    } else if (obj.classList.contains("postalCode")) {
      setPostal(obj.value);
    }
  };

  useEffect(() => {
    handleChanger(
      fullName,
      email,
      password,
      confirmPass,
      streetAdress,
      country,
      phone,
      province,
      city,
      postalCode
    );
  }, [
    fullName,
    email,
    password,
    confirmPass,
    streetAdress,
    country,
    phone,
    province,
    city,
    postalCode,
  ]);
  return (
    <>
      <div className="registerInputBox" onChange={onChange}>
        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
        <input
          type="text"
          className="name block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Full Name"
        />

        <input
          type="text"
          className="email block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
        />

        <input
          type="password"
          className="password block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password"
        />
        <input
          type="password"
          className="confirmPass block border border-grey-light w-full p-3 rounded mb-4"
          name="confirm_password"
          placeholder="Confirm Password"
        />

        <input
          type="number"
          className="phone block border border-grey-light w-full p-3 rounded mb-4"
          name="phone"
          placeholder="Phone Number"
        />

        <input
          type="text"
          className="adress block border border-grey-light w-full p-3 rounded mb-4"
          name="adress"
          placeholder="Street adress"
        />

        <div className="adress">
          <select
            className="country block border border-grey-light w-full p-3 rounded mb-4"
            defaultValue="Country"
          >
            <option value="" disabled>
              Chose country
            </option>
            <option>Romania</option>
            <option>Bulgaria</option>
            <option>Hungary</option>
            <option>Moldova</option>
            <option>Ucraine</option>
          </select>

          <input
            type="text"
            className="province block border border-grey-light w-full p-3 rounded mb-4"
            name="country"
            placeholder="State / Province"
          />

          <input
            type="text"
            className="city block border border-grey-light w-full p-3 rounded mb-4"
            name="country"
            placeholder="City"
          />

          <input
            type="text"
            className="postalCode block border border-grey-light w-full p-3 rounded mb-4"
            name="country"
            placeholder="Zip / Postal code"
          />
        </div>
        <button type="submit" className="registerBtn" onClick={createAccount}>
          Create Account
        </button>

        <div className="policyBox">
          By signing up, you agree to the
          <a
            className="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Terms of Service
          </a>{" "}
          and
          <a
            className="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Privacy Policy
          </a>
        </div>

        <div className="accBox">
          Already have an account?
          <a className="border-b border-blue text-blue">Log in</a>.
        </div>
      </div>
    </>
  );
};

export default RegisterBody;
