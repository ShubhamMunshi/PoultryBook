import { Link, Navigate } from "react-router-dom"
import "../Farmer/FDash.css"
import fdash from "../../Images/FLOGINIMG.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { apiUrl } from "../../Api/AllApis";
// import { ToastContainer, toast } from "react-toastify";
// import { useEffect } from "react";

export const FDash = () => {

    const [x,setx] =useState();


    useEffect(()=>{
            //  window.location.reload();
    }

    ,[x]);
  const [dpdat, setdpdata] = useState([]);
  useEffect(()=>{
    
   
    // const apiUrl= 'http://192.168.29.85:8080';
    try{
    let id =localStorage.getItem("pk");


    axios.get(`${apiUrl}/Getfarm/${id}`).then((resp)=>{
        console.log(resp);
        localStorage.setItem("cboobs",resp.data.companyId);

     
     let farmid =localStorage.getItem("pk");
     let  compid =localStorage.getItem("cboobs");
        const byt ={compid,farmid}

     axios.post(`${apiUrl}/getbatchdetail`,byt).then((resp)=>{
      console.log(resp.data);
      localStorage.setItem("btiddd",resp.data.batchId);
      localStorage.setItem("stbitch",resp.data.batchStatus);
      localStorage.setItem("flbthno",resp.data.batchNo);
     });
       
    })
  }
  catch(error)
  {
    toast.error("data is not present yet");
  }




    //////=========/////////
        // Your effect logic here
        // const apiUrl = "http://localhost:8080";
        try{

        const batchNo = localStorage.getItem("flbthno");
        const batchId = localStorage.getItem("btiddd");
        const farmerId = localStorage.getItem("pk");
        const dailyrpob = { batchId, farmerId, batchNo };
       
       
        if(dailyrpob.batchId!==undefined && dailyrpob.batchId!==null&& !isNaN(dailyrpob.batchId) && dailyrpob.batchNo!==undefined && dailyrpob.batchNo!==null && !isNaN(dailyrpob.batchNo) )
    {
   
           
          axios.post(`${apiUrl}/getdailyrepforfarmer`, dailyrpob).then((ans) => {
            console.log(ans);
           
            setdpdata(ans.data);
            // toast.success("request sent to server successfully", toast.POSITION.TOP_RIGHT);
          });
       
    
       
          axios.post(`${apiUrl}/getmorttotalbirds`, dailyrpob).then((res) => {
            if (
              res.data.totalbirds === null ||
              res.data.totalbirds === [] ||
              res.data.totalbirds === NaN ||
              res.data.totalbirds === undefined ||
              res.data.totalmorts === null ||
              res.data.totalmorts === [] ||
              res.data.totalmorts === NaN ||
              res.data.totalmorts === undefined
            ) {
              // toast.error("data not found");
              return false;
            }
            console.log(res);
            localStorage.setItem("tobirds", res.data.totalbirds);
            localStorage.setItem("tomort", res.data.totalmorts);
          });
    }
      
        
  
      }
      catch (error) {
        toast.error("Bhai/didi tum naye ho pehle daily report bharo ");
      }



},[]);


 


  return (localStorage.getItem("pk") !== null)?
     
    
    <div>
    <ToastContainer/>
      <div className="fdashmain">
     
        <div className="left-div">
          {/* { localStorage.getItem("uniqueid")} */}
         
          <img src={fdash} alt="Farm Dashboard" className="imgleft" />
          
        </div>
        <div className="mid-div">
        <h2>  Farmer Id:{localStorage.getItem("pk")} </h2>
        <span><Link to="/Farmerlogin/dashboard/profile" className="active">Profile</Link></span>
          <span><Link to="/dailyreportoption" className="active">Daily Report</Link></span>
          <span><Link to="/Farmerlogin/dashboard/problemsolution" className="active">Problems <br/> & <br/> Suggestions</Link></span>
          <span><Link to="#" className="active">Learn</Link></span>
          <span><Link to="/Getreportforfarmer" className="active">Get Report</Link></span>
        </div>
      </div>
      
    </div>
    : <Navigate to="/home/Farmerlogin"/>
   
   
  
}

