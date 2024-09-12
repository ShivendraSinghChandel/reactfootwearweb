import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';

import { useDispatch } from 'react-redux';
import { addcartData } from '../addtocartSlice';


const BestOffer = () => {
    const [mydata, setMydata] = useState([]);
    const dispatch = useDispatch();
  
    const loadData = () => {
      let api = "http://localhost:3000/products/?offer=yes";
      axios.get(api).then((res) => {
        setMydata(res.data);
      });
    };
  
    useEffect(() => {
      loadData();
    }, []);
  
    const addDataToCart = (id, name, cate, brand, price, desc, image) => {
      dispatch(addcartData({
        id: id, name: name, category: cate, brand: brand, price: price,
        description: desc, image: image, qnty: 1
      }));
    };
  
    const ans = mydata.map((key) => {
      let offerPrice = (key.price - (key.price * key.discount / 100)).toFixed(0);
  
      return (
        <div className="card-container" key={key.id}>
          <Card style={{ width: '100%', marginTop: '20px', position: 'relative' }}>
            {/* Image container with offer tag */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <Card.Img variant="top" src={key.image} className="card-img-top" />
  
              {/* Offer Tag */}
              <div className="offer-tag">
                {key.discount}% OFF
              </div>
            </div>
  
            <Card.Body>
              <Card.Title className="card-title">{key.name}</Card.Title>
              <h4 style={{ color: 'blue', fontSize: '14px' }}>
                Brand: {key.brand} For - {key.category}
              </h4>
              <Card.Text className="card-text">{key.description}</Card.Text>
  
              {/* Original Price */}
              <h4 className="price-original">Price: {key.price}</h4>
  
              {/* Offer Price */}
              <h6 className="price-offer">Today's Best Price: {offerPrice}</h6>
  
              {/* Add to Cart Button */}
              <Button
                className="add-to-cart"
                onClick={() => { addDataToCart(key.id, key.name, key.category, key.brand, offerPrice, key.description, key.image) }}
              >
                Add To Cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  
    return (
      <>
        <div id="proHeading2">
          <h1>Our Best Offer Products</h1>
        </div>
  
        <div id="homeProduct2">
          {ans}
        </div>
      </>
    );
  }
  
  export default BestOffer;
  