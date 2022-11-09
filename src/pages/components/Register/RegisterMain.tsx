import React, { useState } from 'react'
import Data from '../../../Api'

import RegisterBody from './RegisterBody'

const RegisterMain:React.FC = () => {

    const api = new Data()

    const[fullName,setFullName] = useState(String)
    const[email,setEmail] = useState(String)
    const[password,setPassword] = useState(String)
    const[confirmPass,setConfirm]= useState(String)
    const[billingAddress,setAdress]=useState(String)
    const[country,setCountry] = useState(String)
    const[phone,setPhone]= useState(String)


    const handleChanger= (fullName:string,email:string,password:string,confirmPass:string,billingAdress:string,country:string,phone:string) =>{
          
        setFullName(fullName);
        setEmail(email);
        setPassword(password);
        setConfirm(confirmPass)
        setAdress(billingAdress)
        setCountry(country)
        setPhone(phone)
    }

    const createAccount = async () =>{
         
        const response= await api.createAcc({fullName,email,password,billingAddress,country,phone})

        if(response.status == 200){
            alert("Account created succesfully")
        }else{
            alert("Completati toate campurile")
        }
}

   

  return (
    <div className="registerContainer">
            <div className="registerBox">
             <RegisterBody  handleChanger={handleChanger} createAccount={createAccount}/>

            <div className="accBox">
                    Already have an account? 
                    <a className="border-b border-blue text-blue">
                        Log in
                    </a>.
                </div>
            </div>
     </div>       
  )
}



export default RegisterMain
