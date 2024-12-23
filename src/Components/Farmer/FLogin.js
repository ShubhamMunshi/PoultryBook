import React, { useState } from "react";
import "../Farmer/FLoginv2.css";
import applogo from "../../Images/AppLogo.png";

// import {checkloginfarm} from "../../Api/AllApis"
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { apiUrl } from "../../Api/AllApis";

export const FLogin = () => {

  //  localStorage.removeItem("pk");
  const [showpass, setshowpass] = useState(false);

  const togglepass = () => {
    setshowpass(!showpass);
  };


 
  // for login verification//====================

  const [farid, setusn] = useState("");
  const [farpass, setpass] = useState("");

  const obfarmer = { farid, farpass };
  const sad = 5;





  const handleinfo = async (e) => {
    e.preventDefault();

    //  const res= await checkloginfarm(obfarmer).then((resp)=>{resp.data } )
      try{
        await axios.post(`${apiUrl}/FarmerLogin`, obfarmer).then((response) => {
        console.log(response.data);

        if (response.data === true) {
          localStorage.setItem("avya", sad);
          localStorage.setItem("pk", farid);
       
          setTimeout(function () { console.log(obfarmer); toast.success("Login SUCCESSFUL") }, 1000);

          toast.success("Login SUCCESSFUL");
          document.getElementById("llo").click();




        }
        else {
          toast.error("Login Unsuccesfull please check  username or password", toast.POSITION.BOTTOM_RIGHT);

          // document.getElementById("llo1").click();

        }

      });
    }
    catch(error)
    {
        toast.error("can not connect to server")
    }
   


  }


  return (

    <div id="flbodyyy">

      <title>FARMER LOGIN PAGE</title>






      <div className="flbodyyy-form">
        <div className="flbodyyy-heading">
          <h3 >FARMER LOGIN</h3>
        </div>

        <div><img src={applogo} alt="logo" id="im" className="logo-image" /></div>
        <form >
          <label>Username  </label> :<input
            type="text"
            id="username"
            className="i"
            placeholder="Enter Username*" onChange={(e) => { setusn(e.target.value) }}
          />
          <br />
          <label>  Password:</label>
          <input
            type={showpass ? "text" : "password"}
            id="password"
            className="i"
            placeholder="Enter Password*" onChange={(e) => { setpass(e.target.value) }}
          />
          <br />

          <input
            type="checkbox"
            id="chk"
            onChange={togglepass}
          />

          <label htmlFor="chk">Show Password</label>
          <br />
          <button className="flbodyyy-form-btn" onClick={handleinfo}>Sign In
          </button>


          <Link to="/Farmerlogin/dashboard" id="llo" style={{ display: "none" }} > a </Link>
          {/* <Link to= "/home/Farmerlogin" id="llo1" style={{display:"none"}}>b</Link> */}



        </form>
      </div>


      <ToastContainer />
    </div>

  );
};
