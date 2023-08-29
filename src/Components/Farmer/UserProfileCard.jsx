import React, { useEffect, useState } from 'react'

import profileimg from "../../Images/Gojo.png"
import './UserProfileCard.css'
import axios from 'axios';

const UserProfileCard=()=>
{
    useEffect(()=>{
        const apiUrl = "http://localhost:8080";
        // const apiUrl= 'http://192.168.29.85:8080';
        let id =localStorage.getItem("pk");
        axios.get(`${apiUrl}/Getfarm/${id}`).then((resp)=>{
            console.log(resp);
            setfarmerdata(resp.data);
        })

    },[]);

    const [farmerdata,setfarmerdata] =useState([]);
    // const [Name,setName]=useState()
    // const [Id,setId]=useState()
    // const [Contact,setContact]=useState()
    // const [Adress,setAdress]=useState()
    return(
        <div className='upc'>
            <div className="gradient"> <img src={profileimg} alt=""/></div>
         <div className="profile-down">
               
                <div className='lower-container'>
               <h2>Name :{farmerdata.farmName}</h2>
               <h2>Id :{farmerdata.farmerId}</h2>
               <h2>Contact :{farmerdata.mobileNo}</h2>
               <h2> Address: {farmerdata.farmAddress}</h2>
               
            </div>
            </div>

        </div>
    )
}
export default UserProfileCard