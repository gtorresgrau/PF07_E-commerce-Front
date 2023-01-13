import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S from './Styles/NavBar.module.css'
import { FaUser } from 'react-icons/fa';
import axios from 'axios';


export const UserLogin = () => {
  const { user } = useAuth0();
  const { picture, name, email } = user;
  const [preDataUser, ] = useState({
  image: picture || '',
  fullName: name || '',
  email: email || ''
  }); 
  
  if(preDataUser){
    axios.post('/postuser', preDataUser)
    .catch((error) => {
      console.error(error);
    });
  }


  return (

    <div>

      {user
        ? 
        ( <img className={S.userimage} src={picture} alt="" referrerPolicy="no-referrer"/>) 
        :      ( <FaUser className={S.userimage} />
        )
      }

    </div>

  );
};