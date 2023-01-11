import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import S from './Styles/LoginForm.module.css';

export function UserForm() {

  const { user } = useAuth0();
  const { username, name, email } = user; 
  const [formData, setFormData] = useState({
    username: username || '',
    fullName: name || '',
    emailAddress: email || '',
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
    axios.post('/postuser', formData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
        <div className={S.general}>
          <div className={S.container}>
            <div>
                <Link to="/sneakers"><button className={S.back}>← BACK</button></Link>
            </div>
            <form onSubmit={handleSubmit} className={S.containerInput}>
              <label htmlFor="username" className={S.label}>User Name :</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={S.containerInput}
              />
              <br />
              <label htmlFor="fullName" className={S.label}>Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={S.containerInput}
              />
              <br />
              <label htmlFor="emailAddress" className={S.label}>Email:</label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className={S.containerInput}
              />
              <br />
              <label htmlFor="homeAddress" className={S.label}>Address:</label>
              <input
                type="text"
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleChange}
                className={S.containerInput}
              />
              <br />
              <label htmlFor="region" className={S.label}>Area:</label>
              <input
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
                className={S.containerInput}
              />
              <br />
              <label htmlFor="city" className={S.label}>City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={S.containerInput}
              />
              <br />
              <label htmlFor="phoneNumber" className={S.label}>Phone number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={S.containerInput}
              />
              <br />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>  
      );
 };

 export default UserForm; 