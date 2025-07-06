import React from "react";
import './Sidebar.css';
function Sidebar({ setSavechange,activetab }) {
    return (
        <div className="sidebar">
            <h1 className="logo">PORTFOLIO</h1>
            <ul className="menu">
                <li onClick={() => setSavechange('home')} className={activetab === 'home'?"active":""}>HOME</li>
                <li onClick={() => setSavechange('skills')} className={activetab === 'skills'?"active":""}>SKILLS</li>
                <li onClick={() => setSavechange('contact')} className={activetab === 'contact'?"active":""}>CONTACT</li>
            </ul>
            <hr />
            <div className="social">
                <p>© 2025 Ameesha Antony</p>
            </div>
        </div>
    )
};

export default Sidebar;