import React, { useState } from "react";
import "./FDailyReport.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { apiUrl } from "../../Api/AllApis";

export const FDailyReport = () => {
  

  const navi = useNavigate();
  // const[dailyrpdata,setdailyrpdata]=useState();
  // console.log(dailyreportdata);


  useEffect((

    () => {

      // const apiUrl = " http://192.168.29.85:8080";
    //   const batchNo = localStorage.getItem("flbthno");
    //   const batchId = localStorage.getItem("btiddd");
    //   let farmerId = localStorage.getItem("pk");
    //   const dailyrpob = { batchId, farmerId, batchNo }

    
    //  try{
    //   if(dailyrpob.batchId!==undefined && dailyrpob.batchId!==null&& !isNaN(dailyrpob.batchId) && dailyrpob.batchNo!==undefined && dailyrpob.batchNo!==null && !isNaN(dailyrpob.batchNo) )
    //  { axios.post(`${apiUrl}/getdailyrepforfarmer`, dailyrpob).then((ans) => {

    //   if(ans.data.length>0)
    //    { setdailyrpdata(ans.data);
    //     localStorage.setItem("da", JSON.stringify(ans.data));
    //     const lastobj = ans.data[ans.data.length - 1]; 
    //     const daynum = lastobj.day;
    //     localStorage.setItem("pp", daynum);
        
    //     localStorage.setItem("ii",(parseInt(localStorage.getItem("pp"))+1));
    //   }
    //   else
    //   {
    //         let y=0;
    //         localStorage.setItem("pp",y);
    //         localStorage.setItem("ii",(parseInt(localStorage.getItem("pp"))+1));
    //   }
      
      
    // })
  
    //  }
    // }
    // catch(error){
    //   toast.dark("Create batch now",{position:'top-right'});
    //   console.error("API call error:", error);
    // };
    
  

    }
  ), []);

  let day = parseInt(localStorage.getItem("pp"));


  
  // const apiUrl= 'http://192.168.29.85:8080';
  const [batchId, setbh] = useState(localStorage.getItem("btiddd"))
  const [farmerId, stfmid] = useState(localStorage.getItem("pk"));
  const [companyId, stecmpidd] = useState(localStorage.getItem("cboobs"));
  const [status, setstatus] = useState(localStorage.getItem("stbitch"));
  const [batchNo, setbatchno] = useState(localStorage.getItem("flbthno"));

  ////////////////////////////// state for storing famrers daily data =========/////////////////////
  const [date, setdate] = useState();
  //  const[day,setday]=useState();

  const [mort, setmort] = useState();
  const [feedIntake, setfeedintake] = useState();
  const [bodyWieght, setbdywt] = useState();

  const endbtob = { batchId, farmerId, companyId };


  const endbatch = () => {
    
    console.log(day);
    if (day >= 30) {
      console.log(endbtob)
      axios.put(`${apiUrl}/closebatch`, endbtob).then((res) => {
        console.log(res.data);
        toast.success("batch ended !!");
      })
    }
    else {
      toast.error("You cannot end batch before at least 30 days!!");
    }
  };


  if (isNaN(day) || day === null || day === undefined || day === 0)
    day = 1;
  else {
    day = (day + 1);
  }

  const dailyreportdata = { batchId, bodyWieght, companyId, date, day, farmerId, feedIntake, mort, status, batchNo };
  const handledailyreportfarmer = (e) => {

    e.preventDefault();
    if (batchId === null || batchId === undefined ||
    bodyWieght === null || bodyWieght === undefined ||
    companyId === null || companyId === undefined ||
    date === null || date === undefined ||
    day === null || day === undefined ||
    farmerId === null || farmerId === undefined ||
    feedIntake === null || feedIntake === undefined ||
    mort === null || mort === undefined ||
    status === null || status === undefined ||
    batchNo === null || batchNo === undefined
  ) {
      toast.error("Please fill in all the required fields");
      return;
    }
    console.log(day);


    console.log(dailyreportdata);

    try {
      axios.post(`${apiUrl}/dailyreportfarmer`, dailyreportdata).then((re) => {

        toast.success("Daily report submitted successfully",{position:'top-right'})
        console.log(re.data);
        setTimeout((
          ()=>{
            document.getElementById("dshb").click();
          }
        ),2000)
       
      

      })
    }
    catch (error) {
      toast.error("serverside error");
      console.log(error.message);
    }
  }









  return (
    <div id="whole">
      <ToastContainer />
      <div id="header">
        <h1>Daily Report</h1>       <div className="Fdailyrport-endbatchbtn"><button onClick={endbatch}>End batch</button>
          <div className="message">Do you want to close the batch ?</div>
        </div>
      </div>
      <div id="content">

       
        <div id="frm">
          <form>
          <h2>Day : {localStorage.getItem("ii")}</h2>
            <table className="tbl">
              <tr className="tblr1">
                <th><h3> Date</h3></th>
                {/* <th><h3> Age </h3></th> */}
                <th><h3> Mort </h3></th>
                {/* <th><h3>  Total Mort </h3></th> */}
                {/* <th><h3> Total Stock Available </h3></th> */}
                {/* <th><h3> Min Feed Intake </h3></th> */}
                <th><h3> Actual Feed Intake (in kg)</h3></th>
                {/* <th><h3> Min Body Weight </h3></th> */}
                <th><h3> Actual Body Weight(in grams) </h3></th>
                {/* <th><h3>Status of batch </h3></th> */}
              </tr>
              <tr id="tblr2">
                <td>
                  <input type="date"  onChange={(e) => { setdate(e.target.valueAsDate) }} />
                </td>

                {/* <td>
                  <input type="number" onChange={(e)=>{setday(e.target.value)}}/>
                </td> */}
                <td>
                  <input type="number" onChange={(e) => { setmort(e.target.value) }} />
                </td>
                <td>
                  <input type="number" onChange={(e) => { setfeedintake(e.target.value) }} />
                </td>
                <td>
                  <input type="number" onChange={(e) => { setbdywt(e.target.value) }} />
                </td>
                {/* <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td> */}
                <td>
                  {/* <input type="number" /> */}
                </td>
                {/* <td>
                  <select><option value={true}>open</option><option value={false}>ended</option> </select>
                </td> */}
              </tr>
              <tr>
                <td >

                </td>
              </tr>
            </table>
          </form>
          <Link to="/Farmerlogin/dashboard" id="dshb"></Link>
          <div className="btns">
            <button id="subbtn" onClick={handledailyreportfarmer}>Submit</button>
            <button type="reset" id="resbtn">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
