import React, { useEffect, useState,useContext } from 'react'
import Data from '../../../Api'
import { Alerts } from '../../../Context/Alert'

import RegisterBody from './RegisterBody'

import { useNavigate } from 'react-router-dom'

const RegisterMain:React.FC = () => {

    const api = new Data()

    const {alert,setAlert} = useContext(Alerts)
    
    const navigate= useNavigate()

    const[fullName,setFullName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirmPassword,setConfirm]= useState("");
    const[province,setProvince] = useState("");
    const[postalCode,setPostal] = useState("");
    const[city,setCity] = useState("");
    const[streetAdress,setAdress]=useState("");
    const[country,setCountry] = useState("");
    const[phone,setPhone]= useState("");

    const [err, setErr] = useState(Array<string>);

    const validEmail = new RegExp(
        "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
      );
    
     const validPassword = new RegExp("^([a-zA-Z0-9@*#]{6,20})$");
    
    const validName = new RegExp("^([a-zA-Z.s']{1,50})$");

    var validZip = new RegExp("^[0-9]{6,6}$");

    var validPhone = new RegExp("^[0-9]{10,10}$");
    

    const handleChanger= (fullName:string,email:string,password:string,confirmPass:string,billingAdress:string,country:string,phone:string, province:string,city:string,postalCode:string) =>{
          
        setFullName(fullName);
        setEmail(email);
        setPassword(password);
        setConfirm(confirmPass)
        setAdress(billingAdress)
        setCountry(country)
        setPhone(phone)
        setProvince(province)
        setCity(city)
        setPostal(postalCode)

    }

    const check = () => {
        setErr([]);

    

        if(fullName == ""){
            setErr((prev)=>{
                return [...prev, "Name is required"]
            })
        }else if (!validName.test(fullName)) {
            setErr((prev) => {
              return [...prev, "The name is not valid"];
            });

        }

        if(province == ""){
            setErr((prev)=>{
                return [...prev, "Province is required"]
            })
        }

        if(city == ""){
            setErr((prev)=>{
                return [...prev, "City is required"]
            })
        }

        if(postalCode == ""){
            setErr((prev)=>{
                return [...prev, "Postal code required is required"]
            })
        }else if (!validZip.test(postalCode)){
            setErr((prev)=>{
                return [...prev, "Postal code is not valid"]
            })
        }

        if(country == ""){
            setErr((prev)=>{
                return [...prev, "Country is required"]
            })
        }

        

        
        if(streetAdress == ""){
            setErr((prev)=>{
                return [...prev, "Street adress is required"]
            })
        }

        if(phone == ""){
            setErr((prev)=>{
                return [...prev, "Phone is required"]
            })
        }else if(!validPhone.test(phone)){
            setErr((prev)=>{
                return [...prev, "Phone number is not valid"]
            })
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


        
      
        if (password == "") {
          setErr((prev) => {
            return [...prev, "Password is required"];
          });

        } else if (!validPassword.test(password)) {
          setErr((prev) => {
            return [...prev, "The password must be between 6-20 characters"];
          });
        }
    
        if (confirmPassword == "") {
          setErr((prev) => {
            return [...prev, "Plase confirm your password"];
          });
        }
    
        if (password && confirmPassword) {
          if (password != confirmPassword) {
            setErr((prev) => {
              return [...prev, "Passwords must match!"];
            });
          }
        }


    
        }



    const createAccount = async () =>{

        check()

        if(err.length == 0){

         
        const response= await api.createAcc({fullName,email,password,streetAdress,country,phone,province,city,postalCode})

        if(response.status == 200){
            setAlert(["Account created succesfuly"])
            navigate("/")
        }

    }else{
        setAlert(err)
    }
}

useEffect(()=>{
    check()
},[fullName,email,password,confirmPassword,streetAdress,country,phone,province,city,postalCode])

   

  return (


    <div className="registerContainer">

    <div className='alerts'>

{
    alert.length>0?(
        err.map(e =>{

            return(
                <div className="alertMsg bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-[20%]" role="alert" >
        
                <span className="block sm:inline">{e}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                 
                </span>
             </div>

            )
        })
        
    )

    :
    <p className='none'></p>
}
</div>
            <div className="registerBox">
             <RegisterBody  handleChanger={handleChanger} createAccount={createAccount} err={err}/>

            </div>


     </div>   
   
  )


}



export default RegisterMain
