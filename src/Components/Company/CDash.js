import { Link } from "react-router-dom"
import "./CDash.css";
import { FarmerDetails } from "./FarmerDetails"
import img1 from "../../Images/K3B.png"
import { ToastContainer, toast } from "react-toastify";
import React, { Component, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../Api/AllApis";
 


export const CDash=()=>{

    useEffect(()=>{

        const companyId = localStorage.getItem("compIdVar");
              const obje = {companyId};
         
              axios.post(`${apiUrl}/getfarmerproblemslist`,obje).then((res)=>{
         
         
                   localStorage.setItem("listoffarmprob",JSON.stringify(res.data));
         
         
                  
              })


    },[])



    

    return(<>
     <ToastContainer/>
   
    <div className="Cdash-outerdiv"> 
   
    
    <div className="Cdash-outerdiv-features"> 
    <Link to="/CompanyLogin/CDash/farmersList" id="getfarmdetbtn"></Link>
    <Link to="/FarmerRegistration" id="dofarmreg"></Link>
    <Link to="/GetFarmerDailyReport" id="fmdalirpt"></Link>
    <Link to ="/farmerproblems" id="probfromfram"></Link>
    <Link to="/customers" id="custmers"></Link>
    
    <span><button onClick={()=>{document.getElementById("dofarmreg").click()}} >Farmer Registration  </button> </span>
    <span><button onClick={()=>{document.getElementById("fmdalirpt").click()}}>Get farmer daily report</button></span>
    <span><button onClick={()=>{document.getElementById("getfarmdetbtn").click()}}> Get farmers list</button></span>
   <span> <button onClick={()=>{document.getElementById("custmers").click()}}> Get customers list </button></span>
   <span><button onClick={()=>{document.getElementById("probfromfram").click()}}> Problems From Farmers</button></span>

   </div>

   <div className="Cdash-outerdiv-image">  <h1 style={{textAlign:'center' ,color:'blue'}}> Welcome {localStorage.getItem("compIdVar")} !</h1>  <img src={img1}/></div>

    <ToastContainer/>

   </div>
    </>)
};