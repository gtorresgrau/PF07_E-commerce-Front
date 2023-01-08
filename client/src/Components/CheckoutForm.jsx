import React, { useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContex } from './CardContex';
export function CheckoutForm() {
  
  const  {cartItems}  = useContext(CartContex);
  
    
  const  user  = useAuth0(); 
 
  const [formData, setFormData] = useState({
    fullName: user.user.name || '',
    emailAddress: user.user.email || '',
    homeAddress: '',
    region: '',
    city: '',
    phoneNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar los datos del formulario al backend aquí
    console.log('formData',formData);
    handlePayment()
    axios.post('http://localhost:3001/postuser', formData)
    .then((res) => {
        console.log('response',res)
    })
    .catch((error) => {
      console.error(error);
    });
  };

  function handlePayment(){
    console.log('handlePayment')
    axios.post('http://localhost:3001/payment', [user, cartItems] )
          .then((res)=> 
          {window.location.href = res.data.response.body.init_point;
            localStorage.removeItem('cardProducts');}
          )
          .catch((error)=>console.log('errorC',error))}
  

  return (

    <div>
    
    <form onSubmit={handleSubmit}>
      <h2>Datos personales</h2>
      <label htmlFor="fullName">Name:</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="emailAddress">Email:</label>
      <input
        type="email"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
      />
      <br />
      <h2>Shipping</h2>
      <label htmlFor="homeAddress">Address:</label>
      <input
        type="text"
        name="homeAddress"
        value={formData.homeAddress}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="region">Area:</label>
      <input
        type="text"
        name="region"
        value={formData.region}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
       />
       <br />
      <label htmlFor="phoneNumber">Phone number:</label>
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <br />
      <button type="submit" onClick={handleSubmit}>BUY</button>
    </form>
      
      <div>

        <Link to="/sneakers"><button >← BACK TO CART</button></Link>
      </div>
    </div>  

  );

 }
  export default CheckoutForm; 