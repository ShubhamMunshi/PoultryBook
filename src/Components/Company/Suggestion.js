import { Link, useLocation } from "react-router-dom";
import "./Suggestion.css"
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../Api/AllApis";
import { ToastContainer, toast } from "react-toastify";
export const Suggestion=()=>{

    const location = useLocation();
    const stateData = location.state;
    const[info,setinfo] =useState(stateData);
    console.log(stateData);



    const[farmerId,setfarmerid]=useState(info.farmerId);
    const[batchId,setbtchud]=useState(info.batchId);
    const[batchNo,setbtchNo]=useState(info.batchNo);
    const[companyId,setcompid]=useState(info.companyId);

  const[problemId,setproblemNo] =useState(info.srNo);
   const[problem,setproblem]=useState(info.selectedProblem);
    const[remark,setremark]=useState(info.remark);
    const[solution,setsolution] =useState();

    const objec = {companyId,farmerId,batchNo,batchId,problemId,problem,remark,solution};
    
    const handlesuggest=(e)=>{
           e.preventDefault();

           console.log(objec);

           axios.post(`${apiUrl}/saveproblemsolution`,objec).then((res)=>{
            toast.success("soultion given successfully!!",{position:'top-right'});

            setTimeout(() => {
                document.getElementById("prb").click();
            }, 2000);
           })

    }

    return(<>
     <div className="suggestionforfarm"> 
      <form>
        <ToastContainer/>
    <table> 
    <thead>
              <tr>
                <th>Sr.No</th>
                <th>FarmerId</th>
               
                <th>Problem</th>
                <th>Remark</th>
              
                {/* <th>Give Suggestion</th> */}
              </tr>
            </thead>
            <tbody>
              <Link to="/farmerproblems" id="prb"></Link>
         
              <tr key={info.srNo}>
                <td>{info.srNo}</td>
                <td>{info.farmerId}</td>
                <td>{info.selectedProblem}</td>
                <td>{info.remark}</td>
                </tr>
                <tr> 
                <td colSpan={4}><textarea placeholder="Enter suggestion here ..." style={{width:'90%',height:'150px',fontSize:'x-large'}}
                 onChange={(e)=>{
                     setsolution(e.target.value);
                 }}/>  </td>
                </tr>
                
                <tr><td colSpan={4}><button onClick={handlesuggest} type="submit">Submit</button></td></tr>
             
            </tbody>








    </table>


      </form>

      </div> 
    
    
    </>)
}