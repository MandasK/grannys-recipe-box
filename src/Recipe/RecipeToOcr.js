import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'react-bootstrap';
import APIManager from '../DataCalls/APIManager';
import Axios from 'axios';

const RecipeToOcr = props => {
    
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files= e.target.files
        setLoading(true)
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/kingamanda/image/upload', 
            {
                method: "POST",
                body: data
            }
        )
        const file = await res.json()
        let newFile= file.info.ocr.adv_ocr.data
        let newerFile= newFile[0].fullTextAnnotation
        let newestFile= newerFile["text"]
        sessionStorage.setItem("text", newestFile)
        setLoading(false)
    }
    
   
    return (
        <>
       <div className="imageUpload">
           <h4>Upload Recipe Image</h4>
           <input 
           type="file"
           name="file"
           placeholder="Upload an Image"
           onChange={uploadImage}
           />
           {loading ? (
               <h6>Loading...</h6>
           ): (
           <img src={image} style={{width: '300px'}} /> 
           )}
       </div>
      
       <p>{sessionStorage.text}</p>
   </>
    )
}

export default RecipeToOcr
