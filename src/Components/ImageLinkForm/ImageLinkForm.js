import React from "react";
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onPhotoSubmit}) => {
    return (
        <div>
            <p className="f3 white">
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-100 w-70-m w-80-l center" type="text" onChange={onInputChange}/>
                    <button 
                    className="w-70 w-30-m w-20-l grow f4 link ph3 pv2 dib white bg-light-purple"
                    onClick={onPhotoSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm; 