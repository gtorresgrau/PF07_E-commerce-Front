import React, { useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContex } from './CardContex';
import S from './Styles/Checkout.module.css';


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
  
  
  var data = [...cartItems,user]
  function handlePayment(){
    console.log('handlePayment')
    axios.post('http://localhost:3001/payment', data )
          .then((res)=> 
          {window.location.href = res.data.response.body.init_point;
            localStorage.removeItem('cardProducts');}
          )
          .catch((error)=>console.log('errorC',error))}
  

  return (
      <div className={S.general}>
        <div className={S.container}>
          <div>
            <Link to="/sneakers"><button className={S.back} >← BACK TO CART</button></Link>
          </div>
          <form onSubmit={handleSubmit} className={S.checkoutForm}>
                <div>
                  <h1>¡Hola {formData.fullName}!</h1>
                  <h3>Se te enviara la confirmacion de pago a:</h3>
                  <h3>{formData.emailAddress}</h3>
                  <hr/>
                  <h1>ADD SHIPPING ADDRESS</h1>
                </div>
                <div className={S.containerInput}>
                  <label htmlFor="homeAddress" className={S.label}>Address:  </label>
                    <input
                      className={S.input}
                      type="text"
                      name="homeAddress"
                      value={formData.homeAddress}
                      onChange={handleChange}
                    />
                </div>
                <div className={S.containerInput}>
                  <label htmlFor="region"className={S.label}>Location:  </label>
                    <input
                      className={S.input}
                      type="text"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                    />
                </div>
                <div className={S.containerInput}>
                  <label htmlFor="city"className={S.label}>City:  </label>
                    <input
                      className={S.input}
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                </div>
                <div className={S.containerInput}>
                  <label htmlFor="phoneNumber" className={S.label}>Cellphone:  </label>
                    <input
                      className={S.input}
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                </div>
              <br/>
              <button type="submit" onClick={handleSubmit} className={S.btnBuy}>BUY</button>
          </form>
        </div>
    </div>  

  );

 }
  export default CheckoutForm; 