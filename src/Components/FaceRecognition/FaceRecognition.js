import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({imgUrl, box}) => {
    return(
        <div className="flex justify-center ma">
            <div className="absolute mt2"> 
                <img id='inputimage' alt='' src={imgUrl} width='500px' height='auto' />
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

                </div>
            </div>
        </div>
    );
};

export default FaceRecognition; 