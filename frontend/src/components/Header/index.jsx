import React from 'react';
import './style.css';
export const Header = () => {
    return (
        <>
            <div className="header"> 
                <div className="header_logo">
                    <a href="#" className="logo">Logo</a>
                </div>
                <div className="header_links">
                    <a href="#" className="link1">Home</a>
                    <a href="#" className="link1">Products</a>
                    <a href="#" className="link1">About us</a>
                </div>
                <div className="header_btn">
                    <a href="" className="btn_login">Login</a>
                    <a href="" className="btn_logout">Logout</a>
                </div>
            </div>
        </>
    );
};

