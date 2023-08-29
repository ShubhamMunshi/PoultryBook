import "../Dashboard/Dashv1.css"

import cuteEgg from "../../Images/egg.png";
// import { useState } from "react";
import dimag from "../../Images/Untitleddesign.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";
export const DashV1 =()=>
{
  useEffect(()=>{
   document.title="poultrybook";
  });



    return(<>
 
     {/* <Link to="/kk" >kkdemo</Link> */}
    <div className="maindash">
       <img src={dimag} id="dashwallp"></img>

        <div className="maindash-slogan">
          
           <h1 id="fh1">  POULTRY BOOK </h1>
      
           <h3 id="sh1"> "Unlock The Potential Of  <br/> Your Poultry Farm With  <br/>  Smart Management." </h3> 
         <img src={cuteEgg} id="egg" alt="ANDA" />
        </div>

        <div className="maindash-imageegg">
        
            
           </div>

      </div>
    
    
    </>)
}