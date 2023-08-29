
import '../Navbar/NavV2.css';
import logo from  "../../Images/AppLogo.png" ;
import {Link, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
export const NavV1=()=>
{ const location = useLocation();
    const isHomePage = location.pathname === "/";
    const shouldShowLogout = !isHomePage;
   
  
    useEffect(() => {
     

        if (localStorage.getItem("avya")) {
            const complogElements = document.querySelectorAll(".complog");
            const logoutElements = document.querySelectorAll(".logout");

            complogElements.forEach(element => {
                element.style.display = 'none';
            });

            logoutElements.forEach(element => {
                element.style.display = 'block';
            });
        }

        if (localStorage.getItem("disha")) {
            const farmlogElements = document.querySelectorAll(".farmlog");

            farmlogElements.forEach(element => {
                element.style.display = 'none';
            });
        }
    }, [location]);
 

  
        return (
            <span className="container-for-nav">
                <span className="logo">
                    <img src={logo} alt='logoo' />
                </span>
                <span className="home">
                    <li><button onClick={() => { document.getElementById("hh").click() }}>Home </button> </li>
                </span>
                {isHomePage && (
                    <>
                        <span className="complog" id='nav-complog'>
                            <li><button onClick={() => { document.getElementById("cldd").click() }}>Company Login</button></li>
                        </span>
                        <span className="farmlog">
                            <li><button onClick={() => { document.getElementById("fldd").click() }}>Farmer Login</button> </li>
                        </span>
                    </>
                )}
                <span className="abou">
                    <li><button onClick={() => { document.getElementById("abtl").click() }}>About Us</button> </li>
                </span>
                {shouldShowLogout && (
                    <span className='logout'>
                        <li> <button onClick={() => { document.getElementById("lgt").click() }}>Logout</button></li>
                    </span>
                )}
                <Link to="/" id='hh' onClick={() => { localStorage.clear() }} ></Link>
                <Link to="home/Farmerlogin" id='fldd' onClick={() => { localStorage.clear() }}> </Link>
                <Link to="home/Companylogin" id='cldd' onClick={() => { localStorage.clear() }} ></Link>
                <Link to="/about" id='abtl' onClick={() => { localStorage.clear() }} ></Link>
                <Link to="/" onClick={() => { localStorage.clear() }} id='lgt'></Link>
            </span>
        );
    }