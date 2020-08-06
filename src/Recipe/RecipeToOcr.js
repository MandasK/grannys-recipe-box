import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'react-bootstrap';
import APIManager from '../DataCalls/APIManager';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const RecipeToOcr = props => {
    
    const [image, setImage] = useState({newRecipe: sessionStorage.text});
    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files= e.target.files
        setLoading(true)
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/kingamandarae/image/upload', 
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
           ): ""}

            <Link to={(`/recipes/NewFinish`)}>
                <Button variant="custom" className="goToRecipeButton">Continue</Button>
            </Link>
       </div>
      
       
   </>
    )
}

export default RecipeToOcr
