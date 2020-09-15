import React,{useEffect, useState} from 'react'
import './Nav.css'; 

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100 ){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
           window.removeEventListener('scroll'); 
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://sdtimes.com/wp-content/uploads/2015/12/1201.sdt-netflix-linux.png" 
                alt="Netflix Logo" />
            {/* <p className="nav_avtar">
                H
            </p> */}
        </div>
    )
}

export default Nav
