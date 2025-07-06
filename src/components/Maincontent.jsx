import React from "react";
import photo from '../assets/Ameesha.jpg';
import './Maincontent.css';
function Maincontent(){
    return(
        <div className="main-content">
            <div className="profile-photo">
                <img src={photo} alt="Ameesha" className="profile-img" />
            </div>
            <div className="text-box">
                <h2>Associate Engineer</h2>
                <p>
                    Passionate techy <br/>
                    B.TECH Passout
                </p>
                <p className="signature">Ameesha Antony</p>
            </div>
        </div>
    )
};

export default Maincontent;