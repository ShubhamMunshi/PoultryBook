import { useEffect, useState } from "react";
import "./FProblemSuggestion.css" ;
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { apiUrl } from "../../Api/AllApis";
export const FProblemSuggestion=()=>
{

  
  // const apiUrl = "http://192.168.29.85:8080";
  
   const[farmerId,setfarmerid]=useState(localStorage.getItem("pk"));
    const[batchId,setbtchud]=useState(localStorage.getItem("btiddd"));
    const[batchNo,setbtchNo]=useState(localStorage.getItem("flbthno"));
    const[companyId,setcompid]=useState(localStorage.getItem("cboobs"));
   const[problemImg,setprobimg]=useState("");
   const [ldtt,setldt] =useState();
   const[selectedProblem,setproblem]=useState();
    const[remark,setremark]=useState("");

 const probdata ={farmerId,batchId,batchNo,companyId,problemImg,ldtt,selectedProblem,remark}; 



//    const getFormattedDate = (date) => {
//     const inputDate = date ? new Date(date) : new Date();
//     const year = inputDate.getFullYear();
//     let month = inputDate.getMonth() + 1;
//     let day = inputDate.getDate();

//     month = month < 10 ? `0${month}` : month;
//     day = day < 10 ? `0${day}` : day;

//     return `${year}-${month}-${day}`;
// };


// const manuallySetDate = ldtt;
// const formattedManuallySetDate = getFormattedDate(manuallySetDate);


const handleinfo =(e)=>{
     e.preventDefault();
     axios.post(`${apiUrl}/sendproblem`,probdata).then((res)=>{
         console.log(res.data);
         toast.success("Problem submitted successfully",{position:'top-right'});
         setTimeout((function(){
          document.getElementById("oiu").click();
         }),2000)
        

     })

}
 const obl ={farmerId,companyId,batchId,batchNo}

 const [solutiondata,setsolutiondata] =useState([]);
  useEffect(()=>{

    if(batchId!==undefined && batchId!==null&& !isNaN(batchId) && batchNo!==undefined && batchNo!==null && !isNaN(batchNo) )  
       {
               
         axios.post(`${apiUrl}/getsolutions`,obl).then((res)=>{
                      setsolutiondata(res.data);
                      console.log(solutiondata);
        })
       
      }
      
      

  },[])

       
        
    return(<>
    <ToastContainer/>
    <div className="fprobsugges"> 
      <div id="prob">
      <h1>Problems</h1>
      <form > 
      <table id="tb1">
        <div id="tbod"> 
       <tr>
          <td>Date</td> <td>Select Problem </td> <td> Remark</td> <td>Upload Photo</td>
       </tr>
       <tr><td><input type="date" onChange={(e)=>{setldt(e.target.valueAsDate)}} /></td>
       <td> <select onChange={(e)=>{setproblem(e.target.value) }}><option >viral</option> <option>flue</option> <option>Feed stock over</option> <option>Medicines over </option> <option selected>other</option> </select> </td>
       <td><input type="text" onChange={(e)=>{setremark(e.target.value)}}/></td><td><input type="file" onChange={(e)=>{setprobimg(e.target.files[0])}}/>
       <button onClick={(e)=>{
             e.preventDefault();
            
            const formData = new FormData();
            formData.append('file',problemImg);

            // axios.post('http://192.168.29.85:8080/uploadproblem', formData).then((res)=>{
            //   setprobimg(res.data);
            //   toast.success("image uploaded successfully!!",toast.POSITION.TOP_RIGHT);
            // })
            axios.post('http://localhost:8081/uploadproblem', formData).then((res)=>{
              setprobimg(res.data);
              toast.success("image uploaded successfully!!",toast.POSITION.TOP_RIGHT);
            })


       }}>Upload</button>  </td></tr>

       <tr> <td colSpan={5}><div className="but"> <input type="submit" className="s1" onClick={handleinfo}/> <input type="reset" className="s1"/> </div> </td> </tr> 
       </div>
      </table>
      </form>
      </div>
        
        <div id="sugges"> 
      <h1>Suggetions from Company </h1>
       <form>
       <table id="tb2">
  <tbody>
    <tr>
      <td>ProblemId</td>
      <td>BatchNo</td>
      <td>Problem</td>
      <td>Remark</td>
      <td>Solution</td>
    </tr>
    {solutiondata.map((info) => (
      <tr key={info.solutionId}>
        <td>{info.problemId }</td>
        <td>{info.batchNo}</td>
        <td>{info.problem}</td>
        <td>{info.remark}</td>
        <td>{info.solution}</td>
      </tr>
    ))}
  </tbody>
</table>

       </form>
    
    <Link to="/Farmerlogin/dashboard" id="oiu"></Link>
      </div>


      </div>
    
    </>)
}