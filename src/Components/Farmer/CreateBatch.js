import axios from "axios";
import {  useState } from "react"

import "./CreateBatch.css";
import { Link, Navigate } from "react-router-dom";
import { apiUrl } from "../../Api/AllApis";
import { ToastContainer, toast } from "react-toastify";
export const CreateBatch=()=>{

   

   
   const [startDate,setstartdate] =useState("");
   const [totalBirds,settotalbirds] =useState("");
   const [batchStatus,setbactchstateus] =useState(true);
    const farmerId = localStorage.getItem("pk");
    const companyId = localStorage.getItem("cboobs");
   
   


   const initialBatchNo = parseInt(localStorage.getItem("flbthno"));

// If parsing fails or returns NaN, set batchNo to 1
const initialBatchNoValue = isNaN(initialBatchNo) ? 0 : initialBatchNo;
const [batchNoo,setbtchno] = useState(initialBatchNoValue);
let a = batchNoo;


// ...

const sendBatchReg = async (e) => {
  e.preventDefault();
     if(a>=0)
     {
      console.log("inside if");
      // setbtchno(batchNo + 1);
      a++;
      console.log(a);
     }
   
  
     let batchNo =a ;
    const batchdata ={ startDate,totalBirds,batchStatus,farmerId,companyId,batchNo};
    console.log(batchdata);
    

    try {
    await axios.post(`${apiUrl}/batchregister`, batchdata).then((res)=>{
      toast.success("Batch Registered successfully !",{position:'top-right',autoClose:1000});
          
       setTimeout(()=>{
        document.getElementById("ds").click();
       },1200)

    })
    
     

  } catch (error) {
    toast.error("batch registration failed due to server error",{position:'top-right'});
    console.error("Error:", error);
  }

  
};
     
   

    return(<>
    <div className="crbatch"> 
    <ToastContainer/>
    <Link to="/Farmerlogin/dashboard" id="ds" onClick={()=>{
      let farmid =localStorage.getItem("pk");
     let  compid =localStorage.getItem("cboobs");
        const byt ={compid,farmid}

     axios.post(`${apiUrl}/getbatchdetail`,byt).then((resp)=>{
      console.log(resp.data);
      localStorage.setItem("btiddd",resp.data.batchId);
      localStorage.setItem("stbitch",resp.data.batchStatus);
      localStorage.setItem("flbthno",resp.data.batchNo); })}}> </Link>
     <form >
             
   <table>
      
      <tr><th>Start date</th><th>Total birds</th><th>status</th></tr>
      <tr><td><input type="date" onChange={(e)=>{setstartdate(e.target.value)}}/></td>
      <td><input type="number" onChange={(e)=>{settotalbirds(e.target.value)}}/></td>
      <td><select onChange={(e)=>{setbactchstateus(e.target.value)}}><option value={true}>Started</option></select></td>
      </tr>
          <tr id="sss"><td colSpan={3} ><button type="submit"  onClick={sendBatchReg}>Submit data</button></td></tr>
     
   </table>
   </form>
  
   </div>
  
    </>)
}