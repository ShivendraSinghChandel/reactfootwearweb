
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addcartData } from '../addtocartSlice';

const MenProductformals=()=>{
  const [mydata, setMydata] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const dispatch = useDispatch();
  
  const loadData = () => {
    let api = "http://localhost:3000/products?category=men&name=Formals";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };
  
  useEffect(() => {
    loadData();
  }, []);
  
  const handleSizeChange = (id, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [id]: size,
    }));
  };
  
  const addDataToCart = (id, name, cate, brand, price, desc, image) => {
    const selectedSize = selectedSizes[id]; // Get the selected size
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    dispatch(
      addcartData({
        id: id,
        name: name,
        category: cate,
        brand: brand,
        price: price,
        description: desc,
        image: image,
        size: selectedSize, // Add size to the cart
        qnty: 1,
      })
    );
  };
  
  const ans = mydata.map((key) => {
    return (
      <>
        <Card style={{ width: "350px", margin: "1%" }} key={key.id}>
          <Card.Img variant="top" src={key.image} />
          <Card.Body style={{ fontSize: "20px" }}>
            <Card.Title>{key.name}</Card.Title>
            <h1 style={{ color: "blue", fontSize: "20px" }}>
              Brand: {key.brand} For - {key.category}
            </h1>
            <Card.Text>{key.description}</Card.Text>
            <h2 style={{ color: "red", fontSize: "22px" }}>
              Price: {key.price}
            </h2>
  
            {/* Size Selector as Buttons */}
            <div style={{ marginBottom: "10px" }}>
              <p>Select Size:</p>
              <div style={{ display: "flex", gap: "10px" }}>
                {key.size.map((size, index) => (
                  <Button
                    key={index}
                    variant={
                      selectedSizes[key.id] === size ? "primary" : "outline-primary"
                    }
                    onClick={() => handleSizeChange(key.id, size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
  
            <Button
              variant="success"
              onClick={() =>
                addDataToCart(
                  key.id,
                  key.name,
                  key.category,
                  key.brand,
                  key.price,
                  key.description,
                  key.image
                )
              }
            >
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  });


 return(
        <>
       <div id="proHeading">
        <h1> Men Watches</h1>
       </div>
       
       <div id="homeProduct">
        {ans}        
       </div>

        </>
    )
}

export default MenProductformals;