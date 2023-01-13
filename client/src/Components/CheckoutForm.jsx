import React, { useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContex } from './CardContex';
import S from './Styles/Checkout.module.css';


function validate(formData) {
  let errors = {};
  if (!formData.homeAddress) errors.homeAddress = "Select shipping address";
  else if (!formData.region) errors.region = "Select region";
  else if (!formData.city) errors.city = "Select city";
  else if (!/^([0-9]){7,8}$/g.test(formData.phoneNumber.trim())) errors.phoneNumber = 'Only accept numbers, min 7 - max 8';
  return errors;
}

export function CheckoutForm() {
  const user = useAuth0();
  const { cartItems } = useContext(CartContex);
  const [errors, setErrors] = useState({});

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
    setErrors(validate({ ...formData, [event.target.name]: event.target.value }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate({ ...formData, [e.target.name]: e.target.value }))
    handlePayment()
  };


  var data = [...cartItems, formData]
  
  const handlePayment = async () => {
    axios.post('/payment', data)
      .then((res) => {
        const id = res.data.response.body.id;
        const client_id = res.data.response.body.client_id;
        const info = [cartItems, formData, id, client_id]
        console.log('infoFront:', info)
        axios.post('/response', info)
        window.location.href = res.data.response.body.init_point;
        localStorage.removeItem('cardProducts');
      })
      .catch((error) => console.log('errorC', error))
  };

  return (
        <div className={S.general}>
            <div className={S.container}>
              <div>
                <Link to="/sneakers"><button className={S.back} >← BACK TO CART</button></Link>
              </div>
              <form onSubmit={handleSubmit} className={S.checkoutForm}>
                <div>
                  <h1>¡Hi, {formData.fullName}!</h1>
                  <h3>Confirmation of purchase will be sent to:</h3>
                  <h3>{formData.emailAddress}</h3>
                  <hr />
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
                    required
                  />
                  {errors.homeAddress && <span className={S.spanError}>{errors.homeAddress}</span>}
                </div>
                <div className={S.containerInput}>
                  <label htmlFor="region" className={S.label}>Location:  </label>
                  <input
                    className={S.input}
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    required
                  />
                  {errors.region && <span className={S.spanError}>{errors.region}</span>}
                </div>
                <div className={S.containerInput}>
                  <label htmlFor="city" className={S.label}>City:  </label>
                  <input
                    className={S.input}
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  {errors.city && <span className={S.spanError}>{errors.city}</span>}
                </div>
                <div className={S.containerInput}>
                  <label htmlFor="phoneNumber" className={S.label}>Cellphone:  </label>
                  <input
                    className={S.input}
                    type="number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                  {errors.phoneNumber && <span className={S.spanError}>{errors.phoneNumber}</span>}
                </div>
                <br />
                <button type="submit" onClick={handleSubmit} className={S.btnBuy} disabled={!formData.city || formData.phoneNumber.length < 7 || formData.phoneNumber.length > 8 || !formData.region || !formData.homeAddress}>BUY</button>
              </form>
            </div >
        </div >
  )
};


export default CheckoutForm;
