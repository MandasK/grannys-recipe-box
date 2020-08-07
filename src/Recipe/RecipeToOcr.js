import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Button, Row, Col, Image } from 'react-bootstrap';
import APIManager from '../DataCalls/APIManager';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/Navbar'
import "./RecipeToOcr.css"

const RecipeToOcr = props => {
    
    
    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files= e.target.files
        setLoading(true)
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/kingamandaraeno/image/upload', 
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
   
    const uploadRecipeImage = async e => {
        const files= e.target.files
        setLoading(true)
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'recipes')
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/kingamandarae/image/upload', 
            {
                method: "POST",
                body: data
            }
        )
        const file = await res.json()
        let recipeImage= file.secure_url
        console.log(file.secure_url)
        sessionStorage.setItem("recipeImage", recipeImage)

       
        setLoading(false)
    }
    return (
        <>
        <NavBar {...props} /> 
        <div className="imageContainer">
       <Row className="imageUpload">
           <Col sm={4} className="OCRCol">
           <h4 className="OCRText">Upload Image to Return as Text</h4>
           <input 
           className="OCRInput"
           type="file"
           name="file"
           placeholder="Upload an Image"
           onChange={uploadImage}
           />
           </Col>
           <Col className="returnCol">
           {loading ? (
               <h6 className="loadingOCR">Loading...</h6>
           ): <p>{sessionStorage.text}</p>}
           </Col>
            </Row>
            <Row className="imageUpload">
            <Col sm={4} className="imageCol">
           <h4 className="imageText">Upload Recipe Image</h4>
           <input 
           className="imageInput"
           type="file"
           name="file"
           placeholder="Upload an Image"
           onChange={uploadRecipeImage}
           />
           </Col>
           <Col>
           {loading ? (
               <h6 className="loadingImage">Loading...</h6>
           ): <Image src={(sessionStorage.recipeImage)} alt="Recipe Image" className="recipeImage" style={{ width: "350px", height: "350px" }} />}
           </Col>
           <Col>
           <Link to={(`/recipes/NewFinish`)}>
                <Button variant="custom" className="continueRecipeButton">Continue</Button>
            </Link>
           </Col>
           </Row>    
   </div>
   </>
    )
}

export default RecipeToOcr
