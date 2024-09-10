import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addcartData } from '../addtocartSlice';
import sppinergif from "../images/load.gif"
 

const ProductSearch=()=>{
    const {txtdata}= useParams();
    const [mydata, setMydata]=useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const dispatch= useDispatch();    

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 1000);

        setIsLoading(true);

    }, [txtdata])

  


    const loadData=()=>{
       let api=`http://localhost:3000/products/`;
       axios.get(api).then((res)=>{
        setMydata(res.data);
       })
    }
    useEffect(()=>{
      loadData();
    }, [])
    
    
    const addDataToCart=(id, name, cate, brand, price, desc, image)=>{
         dispatch(addcartData({id:id, name:name, category:cate, 
          brand:brand, price:price, description:desc,image:image, qnty:1}))
    }
    
    
    
    
    
    
    
    
    const ans=mydata.map((key)=>{               
      const status=key.name.includes(txtdata)||key.description.includes(txtdata);
      
      if (status)
      {

       return(
        <>
       <Card style={{ width: '350px',  margin:"1%" }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body  style={{fontSize:"20px"}}>
        <Card.Title  > {key.name} </Card.Title>
        <h1  style={{color:"blue", fontSize:"20px"}}>  Brand : { key.brand} 

         {" "}  For - {key.category}
        </h1>
        <Card.Text>
           {key.description}
        </Card.Text>
         <h2 style={{color:"red", fontSize:"22px"}}> Price : {key.price} </h2> 
        <Button variant="primary" 
        onClick={()=>{addDataToCart(key.id, key.name, key.category, key.brand, key.price, key.description, key.image)}}>Add To Cart</Button>
      </Card.Body>
    </Card>
        </>
       )
    }
    })
     return(
            <>
           <div id="proHeading">
            <h1> All Search  Footwear</h1>
           </div>
           {isLoading ? (
             <center>
             <img src={sppinergif} style={{width:"200px", height:"200px"}} />
             </center>
           ) : (
            <div id="homeProduct">     
            {ans}        
         </div>
           )}
            </>
        )
    }
export default ProductSearch;