import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link} from 'react-router-dom';

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
    axios.post('http://localhost:3001/postuser', formData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (

    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">User Name :</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <br />
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
      <button type="submit">Send</button>
    </form>
      
      <div>

        <Link to="/sneakers"><button >← BACK</button></Link>
      </div>
    </div>  

  );

 }
  export default UserForm; 