import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S from './Styles/NavBar.module.css'


export const UserLogin = () => {
  const { user} = useAuth0();

const  img = user.picture ;

  const img = user.picture ;
  
  return (

      <div>

<<<<<<< HEAD
        <img className={S.img} src={img} alt="user.img" />
=======
          <img className={S.img} src={img} alt="user.img" />
>>>>>>> 0a5fd4bff7a481812961e713953cf7b74071caf2

      </div>

  );
};