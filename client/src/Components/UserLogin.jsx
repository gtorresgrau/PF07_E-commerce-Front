import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S from './Styles/NavBar.module.css'


export const UserLogin = () => {
  const { user} = useAuth0();

<<<<<<< HEAD
  

  return (
    
      <div>
        
        <h2 className={S.singInButton}>{user.name}</h2>
        
      </div>
    
=======


  return (

      <div>

        <h2 className={S.singInButton}>{user.name}</h2>

      </div>

>>>>>>> fdd3082b456c4a1247ad9a1873c35dc3b3e14d71
  );
};