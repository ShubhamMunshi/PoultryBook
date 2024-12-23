import axios from "axios";
// import { toast } from "react-toastify";
// import { us} from "react-router-dom";

// const apiUrl = "http://localhost:8080/Companylogin/CompanyRegistration";

export const apiUrl ="http://localhost:8081";
// export const apiUrl= 'http://192.168.29.85:8080';
// export const apiUrl= 'http://192.168.43.25:8080';



export const  addCompany = async(data)=>
{
    try{
     return await axios.post(`${apiUrl}/CompanyRegistration`,data)
       
    }
    catch(error)
    {
        console.log("error while calling api",error.message);
    }
}


export const getfarmerall = async(data)=>{
    try{
  
       return await axios.post(`${apiUrl}/FarmerList`,data)


    }


    catch(error)
    {
        console.log("error while calling api ",error.message);
    }
}


export const  addfarmer = async(data)=>
{
    try{
       return await axios.post(`${apiUrl}/FarmerRegistration`,data)
    }
    catch(error)
    {
        console.log("error while calling api",error.messsage);
    }
}


// export const checkloginfarm = async(data)=>
// {
//    try{
      
//      return await axios.post(`${apiUrl}/FarmerLogin`,data).then((response)=>{
//         console.log(response.data);
//      })

//    }
//    catch(error)
//    {
//     console.log("error calling api ",error.message);
//    }
   
// }

export const  addCustomer = async(data)=>
{
    try{
       return await axios.post(`${apiUrl}/registerCust`,data)
    }
    catch(error)
    {
        console.log("error while calling api",error.message);
    }
}