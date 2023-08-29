

import { toast } from "react-toastify";
import { apiUrl } from "../../Api/AllApis";
import "./Dailyreportoptions.css"
import { Link } from "react-router-dom"
import axios from "axios";
export const Dailyreportoptions=()=>{
    return (localStorage.getItem("btiddd")!==null&&localStorage.getItem("stbitch")==="true")?
    (
        <div className="Dailyreportoptions-button"> 
        <button onClick={()=>{
            
            const batchNo = localStorage.getItem("flbthno");
            const batchId = localStorage.getItem("btiddd");
            let farmerId = localStorage.getItem("pk");
            const dailyrpob = { batchId, farmerId, batchNo }
      
          
           try{
            if(dailyrpob.batchId!==undefined && dailyrpob.batchId!==null&& !isNaN(dailyrpob.batchId) && dailyrpob.batchNo!==undefined && dailyrpob.batchNo!==null && !isNaN(dailyrpob.batchNo) )
           { axios.post(`${apiUrl}/getdailyrepforfarmer`, dailyrpob).then((ans) => {
      
            if(ans.data.length>0)
             {
                //  setdailyrpdata(ans.data);
              localStorage.setItem("da", JSON.stringify(ans.data));
              const lastobj = ans.data[ans.data.length - 1]; 
              const daynum = lastobj.day;
              localStorage.setItem("pp", daynum);
              
              localStorage.setItem("ii",(parseInt(localStorage.getItem("pp"))+1));
            }
            else
            {
                  let y=0;
                  localStorage.setItem("pp",y);
                  localStorage.setItem("ii",(parseInt(localStorage.getItem("pp"))+1));
            }
            
            
          })
        
           }
          }
          catch(error){
            toast.dark("Create batch now",{position:'top-right'});
            console.error("API call error:", error);
          };
          
            
        setTimeout(()=>{document.getElementById("dlrp").click()  },1000)
            ;}}  
            
            
            
            
            > Fill data </button>
        <Link to={"/Farmerlogin/dashboard/dailyreport"} id="dlrp"></Link>
        </div>
    )

    :
    
    (
   

<div className="Dailyreportoptions-button">
<button onClick={()=>{document.getElementById("crtb").click(); }}> Create batch   </button>
<Link to={"/create"} id="crtb"></Link>
</div>
    )
   
    
}