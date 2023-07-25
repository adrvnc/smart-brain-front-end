import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
        <nav className="tr mr3">
            <p onClick={() => onRouteChange('signout')} className="f6 link dim br-pill ph3 pv2 mb2 dib dark-blue bg-white pointer b">Sign Out</p>
        </nav>
        );
    } else {
        return (
            <nav className="tr mr3">
                <p onClick={() => onRouteChange('signin')} className="f6 link dim br-pill ph3 pv2 mb2 dib dark-blue bg-white pointer b">Sign in</p>
                <p onClick={() => onRouteChange('register')} className="f6 link dim br-pill ph3 pv2 mb2 dib dark-blue bg-white pointer b" style={{ marginLeft: '10px' }}>Register</p>
            </nav>
        );
    }
}

export default Navigation; 