
// import { useEffect, useState } from "react";
// import "./Problmefromfarmer.css"
// import axios from "axios";
// export const Problmefromfarmer=()=>{
        
//      const [probs,setprobs] =useState((JSON.parse(localStorage.getItem("listoffarmprob"))));
//      const reversedProbs = probs.slice().reverse();
//      console.log(probs);


   
//       const [enlarged, setEnlarged] = useState(false);
    
//       const toggleEnlarged = () => {
//         setEnlarged(prevEnlarged => !prevEnlarged);
//       };
    
//     return(<>
     
//      <div className="mainprobmlfromfarmer">
//      <div className={`photo-container ${enlarged ? 'enlarged' : ''}`} style={{position:'absolute'}}>
//         <table>
//             <tr> <th>Sr.No</th><th>FarmerId</th><th>BatchId</th><th>Date</th><th>Problem </th> <th> Problem Description</th> <th>Problem Image </th></tr>
          
//           { reversedProbs.map(info =>{ return(<tr  key={info.srNo}> <td>{info.srNo}</td> <td>{info.farmerId} </td>  <td>{info.batchId}</td> <td>{info.ldtt}</td> <td>{info.selectedProblem}</td> <td>{info.remark}</td> <td> 
//              {/* <img  src={` http://192.168.29.85:8080/images/problems/${info.problemImg}`} alt={`Problem ${info.srNo}`} />  */}
//                {/* <img  src={`http://localhost:8080/images/problems/${info.problemImg}`} alt={`Problem ${info.srNo}`} /> */}
//                <img
//         src={`http://localhost:8080/images/problems/${info.problemImg}`}
//         alt="Enlargable Photo"
//         className="enlargeable-photo"
//         onClick={toggleEnlarged}
//       />
//                </td> </tr>)})}

//         </table>
//         </div>
 
//      </div>
    
    
    
//     </>)
// }


import { useEffect, useState } from "react";
import "./Problmefromfarmer.css";

import { ToastContainer, toast } from "react-toastify";

export const Problmefromfarmer = () => {
  const [probs, setprobs] = useState(
    JSON.parse(localStorage.getItem("listoffarmprob"))
  );
   


  const reversedProbs = probs.slice().reverse();
  console.log(probs);
   

  const [enlargedImages, setEnlargedImages] = useState([]);
  
  useEffect(()=>{
   if(probs.length===0)
   {
    toast.info("No problems",{position:'top-center'});
   }

  },[])
  


  const toggleEnlarged = (index) => {
    setEnlargedImages((prevEnlarged) => {
      const newEnlarged = [...prevEnlarged];
      newEnlarged[index] = !newEnlarged[index];
      return newEnlarged;
    });
  };

  return (
    <>
    <ToastContainer/>
      <div className="mainprobmlfromfarmer" >
        <div className={"photo-container"} >
          <table>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>FarmerId</th>
                <th>BatchId</th>
                <th>Date</th>
                <th>Problem</th>
                <th>Problem Description</th>
                <th>Problem Image</th>
              </tr>
            </thead>
            <tbody>
              {reversedProbs.map((info, index) => (
                <tr key={info.srNo}>
                  <td>{info.srNo}</td>
                  <td>{info.farmerId}</td>
                  <td>{info.batchId}</td>
                  <td>{info.ldtt}</td>
                  <td>{info.selectedProblem}</td>
                  <td>{info.remark}</td>
                  <td>
                    <img
                      src={`http://localhost:8080/images/problems/${info.problemImg}`}
                      alt={`Problem ${info.srNo}`}
                      className={`enlargeable-photo ${
                        enlargedImages[index] ? "enlarged" : ""
                      }`}
                      onClick={() => toggleEnlarged(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
