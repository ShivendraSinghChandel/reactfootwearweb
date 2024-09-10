import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import w1 from "../images/w1.png";
import w2 from "../images/w2.png"
import w3 from "../images/w3.png"
import w4 from "../images/w4.png"
import { useDispatch } from 'react-redux';
import { addcartData } from '../addtocartSlice';


const Home=()=>{
const [mydata, setMydata]=useState([]);
const dispatch= useDispatch();

const loadData=()=>{
   let api="http://localhost:3000/products";
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
})



    return(
        <>
          
           <Carousel>
      <Carousel.Item>
      <img src={w1}  style={{width:"100%", height:"80%"}}/>
     
      </Carousel.Item>
      <Carousel.Item>
      <img src={w4} style={{width:"100%", height:"100%"}}/>
      
      </Carousel.Item>
      <Carousel.Item>
      <img src={w3} style={{width:"100%", height:"80%"}}/>
      
      </Carousel.Item>
      <Carousel.Item>
      <img src={w2} style={{width:"100%", height:"80%"}}/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={w3} style={{width:"100%", height:"80%"}}/>
      
      </Carousel.Item>

    </Carousel> 

       <div id="proHeading">
        <h1> Our Premium footwear</h1>
       </div>
       
       <div id="homeProduct">
        {ans}        
       </div>
       
       <div  id='bottom'>
       <img src="https://d2lo0tepqt73yr.cloudfront.net/imageupload_1713950643059.png" alt="" />
        <img src="https://d2lo0tepqt73yr.cloudfront.net/imageupload_1713950622060.png" alt="" />

       </div>

        </>
    )
}

export default Home;