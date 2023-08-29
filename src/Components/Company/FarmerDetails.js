
import { useEffect, useState } from "react"
import { apiUrl, getfarmerall } from "../../Api/AllApis"
import kanao from "../../Images/1011170.png"
import "./FarmerDetails.css"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
export const FarmerDetails=()=>{

    let companyId = localStorage.getItem("compIdVar");
    const obj = {companyId};
    const [farmdataa ,setfarmdataa]= useState([]);
         
    useEffect(()=>{
          
      
       axios.post(`${apiUrl}/FarmerList`,obj).then((res)=>{
            
        console.log(res);
        if(res.data.length === 0)
        {
            console.log(" got empty array");
        toast.error("There are no registered farmers",{position:'top-right'});
        }
        setfarmdataa(res.data)   
       })
    
        
         
    
},[localStorage.getItem("compIdVar")]);

   
      
        

    


    return(<>
        <div id="mainb"> 
        <ToastContainer/>
        {/* <img src={kanao}/> */}
         <table> 
            <tr><th>Farmer Id</th><th>Farmer Name </th><th>Gender </th> <th>Date of Birth </th><th>Mobile no </th><th>Farmer Address </th><th>District</th><th> Pincode </th></tr>
            
               
               {
                   farmdataa.map(info =>(
                    <tr>
                          <td> {info.farmerId}  </td>  
                          <td> {info.farmName} </td> 
                          <td>  {info.gender}</td> 
                          <td> {info.date} </td> 
                          <td> {info.mobileNo} </td> 
                          <td> {info.farmAddress} </td>
                          <td> {info.farmDist} </td>  
                          <td> {info.pincode} </td> 
                         

                    </tr>
                   ))

               }

              
                 



          
         
         </table>

         </div> 
    
    
    
    
    </>)
}