import React from "react";
import { useNavigate } from "react-router-dom";

const Sumary: React.FC = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  return (
    <div className="summary">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items 3</span>
        <span className="font-semibold text-sm">590$</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        <select className="block p-2 text-gray-600 w-full text-sm mb-4">
          <option>Standard shipping - $10.00</option>
          <option>Premium shipping - $15.00</option>
        </select>
      </div>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase ">
          <span>Total cost</span>
          <span>$600</span>
        </div>
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Sumary;
