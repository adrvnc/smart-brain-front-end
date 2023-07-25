import React from "react";
import Tilt from 'react-parallax-tilt';
import Brain from './brain-logo.png';
import './Logo.css'; 

const Logo = () => {
    return (
        <div className="logo-container">
            <Tilt  scale={1.1} tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000}>
                <img alt="Brain Logo" src={Brain} className="brain-logo"/> 
            </Tilt>
        </div>
    );
};

export default Logo; 