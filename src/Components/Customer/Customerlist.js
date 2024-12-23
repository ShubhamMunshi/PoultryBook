
import { Link } from "react-router-dom"
import "./Customerlist.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { apiUrl } from "../../Api/AllApis"
import { toast } from "react-toastify"
export const Customerlist=()=>{

    const companyId =localStorage.getItem("compIdVar");
    const obj={companyId};
    const [custlist,setcustlist]=useState([]);

    useEffect(()=>{
        axios.post(`${apiUrl}/getAllCustomers`,obj).then((res)=>{
             console.log(res.data);
             setcustlist(res.data);
        })
    },[])






    return(<>
                    
               
               <div id="custlistinf"> 

               <button onClick={()=>{
                        document.getElementById("custreg").click();
                       }}  id="custrefbtn">Register Customer</button>
                    <Link to="/customerregister" id="custreg"> </Link>


                    <table> 
            <tr><th>Customer Id</th><th>Customer Name </th><th>Email Address</th> <th>Mobile No </th><th>Address </th></tr>
            
               
               {
                   custlist.map(info =>(
                    <tr>
                          <td> {info.companyid}  </td>  
                          <td> {info.customername} </td> 
                          <td>  {info.customeremail}</td> 
                          <td> {info.customercontact} </td> 
                          <td> {info.customeraddress} </td> 
                         

                    </tr>
                   ))

               }

              
                 



          
         
         </table>
        

         </div>
    
    </>)
}