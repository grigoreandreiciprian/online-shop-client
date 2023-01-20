import React from "react";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import Data from "../../../Api";
import Costumer from "../../../models/Costumer";

interface Functions {
  handleChanger: (
    fullName: string,
    email: string,
    adress: string,
    country: string,
    phone: string,
    city: string,
    province: string,
    postalCode: string
  ) => void;

  err: Array<String>;

  UpdateAccount: () => void;
}

const AccountSettingsForm: React.FC<Functions> = ({
  handleChanger,
  err,
  UpdateAccount,
}: Functions) => {
  const [cookies, setCookie] = useCookies(["authentificatedUser"]);
  const [user, setUser] = useState(Object);
  const api = new Data();
  const [id, setId] = useState(Number);
  const [city, setCity] = useState(String);
  const [country, setCountry] = useState(String);
  const [email, setEmail] = useState(String);
  const [fullName, setName] = useState(String);
  const [phone, setPhone] = useState(String);
  const [postalCode, setPostalCode] = useState(String);
  const [province, setProvince] = useState(String);
  const [adress, setAdress] = useState(String);

  const findUser = async () => {
    const users = await api.getUsers();

    //@ts-ignore
    const user = users.filter(
      (e: Costumer) => e.id === cookies.authentificatedUser.id
    )[0];

    setUser(user);
    setId(user.id);
    setAdress(user.streetAdress);
    setCity(user.city);
    setCountry(user.country);
    setEmail(user.email);
    setName(user.fullName);
    setPhone(user.phone);
    setPostalCode(user.postalCode);
    setProvince(user.province);
  };

  const onChange = (e: React.FormEvent<HTMLDivElement>) => {
    let obj = e.target as HTMLInputElement;

    if (obj.classList.contains("name")) {
      setName(obj.value);
    } else if (obj.classList.contains("email")) {
      setEmail(obj.value);
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
      setPostalCode(obj.value);
    }
  };

  useEffect(() => {
    handleChanger(
      fullName,
      email,
      adress,
      country,
      phone,
      province,
      city,
      postalCode
    );
  }, [fullName, email, adress, country, phone, province, city, postalCode]);

  useEffect(() => {
    findUser();
  }, []);

  return (
    <div className="font-mono accountSettings">
      {(() => {
        if (user) {
          return (
            <div className="container mx-auto">
              <div className="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 className="text-2xl text-gray-900">Account Setting</h2>
                <div className="mt-6 border-t border-gray-400 pt-4">
                  <div
                    className="flex flex-wrap -mx-3 mb-6"
                    onChange={onChange}
                  >
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        email address
                      </label>
                      <input
                        className="email appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        id="grid-text-1"
                        type="text"
                        placeholder="Enter email"
                        defaultValue={user.email}
                        required
                      ></input>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6 ">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        password
                      </label>
                      <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">
                        change your password
                      </button>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        pick your country
                      </label>
                      <div className="flex-shrink w-full inline-block relative">
                        <select className="country block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                          <option>{user.country}</option>
                          <option>Hungary</option>
                          <option>Bulgaria</option>
                          <option>Ucraine</option>
                          <option>Moldova</option>
                        </select>
                        <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="personal w-full border-t border-gray-400 pt-4">
                      <h2 className="text-2xl text-gray-900">Personal info:</h2>
                      <div className="flex items-center justify-between mt-4">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Full name
                          </label>
                          <input
                            className="name appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                            type="text"
                            defaultValue={user.fullName}
                            required
                          ></input>
                        </div>
                        <div className=" w-full md:w-1/2 px-3 mb-6">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Phone Number
                          </label>
                          <input
                            className="phone appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                            type="text"
                            defaultValue={user.phone}
                            required
                          ></input>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Province
                          </label>
                          <input
                            className="province appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                            type="text"
                            defaultValue={user.province}
                            required
                          ></input>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            City
                          </label>
                          <input
                            className="city appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                            type="text"
                            defaultValue={user.city}
                            required
                          ></input>
                        </div>
                      </div>
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Adress
                        </label>
                        <input
                          className="adress appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          type="text"
                          defaultValue={user.streetAdress}
                          required
                        ></input>
                      </div>

                      <div className="flex justify-end">
                        <button
                          className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                          onClick={UpdateAccount}
                        >
                          save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default AccountSettingsForm;
