import React, { useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { CartContex } from './CardContex';
import S from './Styles/Checkout.module.css';
import { useSelector } from 'react-redux';


function validate(formData) {
  let errors = {};
  if (!formData.homeAddress) errors.homeAddress = "Select shipping address";
  else if (!formData.region) errors.region = "Select region";
  else if (!formData.city) errors.city = "Select city";
  else if (!/^([0-9]){7,8}$/g.test(formData.phoneNumber.trim())) {  //   
    errors.phoneNumber = 'Only accept numbers, min 7 - max 8';
  }
  return errors;
}

export function CheckoutForm() {

  const { cartItems } = useContext(CartContex);
  const history = useHistory()

  const user = useAuth0();

  const users = useSelector((state) => state.users)

  const userBaned = users.find(e => e.email === user.user.email)
  console.log("USERBANNED", userBaned)

  const [formData, setFormData] = useState({
    fullName: user.user.name || '',
    emailAddress: user.user.email || '',
    homeAddress: '',
    region: '',
    city: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors(validate({ ...formData, [event.target.name]: event.target.value }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar los datos del formulario al backend aquí
    console.log('formData', formData);
    setErrors(validate({ ...formData, [event.target.name]: event.target.value }))
    handlePayment()

    axios.post('/postuser', formData)
      .then((res) => {
        console.log('response', res)
      })
      .catch((error) => {
        console.error(error);
      });
  };


  var data = [...cartItems, user]
  function handlePayment() {
    console.log('handlePayment')

    axios.post('/payment', data)
      .then((res) => {
        window.location.href = res.data.response.body.init_point;
        localStorage.removeItem('cardProducts');
      }
      )
      .catch((error) => console.log('errorC', error))
  }

  return (
    <div className={S.general}>
      {userBaned.isBanned ? alert("You have been banned!", history.push("/sneakers"))
        :
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
      }
    </div >

  );

}
export default CheckoutForm;