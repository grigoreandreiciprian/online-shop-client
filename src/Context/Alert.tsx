import React, { createContext, useState } from "react";
import { useEffect } from "react";



type Props = {
  children?: React.ReactNode
};




export const Alerts = createContext({alert :[], setAlert :(alert:string[])=>{}});

const AlertProvider:React.FC<Props> = ({ children }) => {
  const [alert, setAlert] = useState([]);
  return (
  // @ts-ignore
    <Alerts.Provider value={{alert, setAlert}}>{children}</Alerts.Provider>
  );
};

export default AlertProvider;
