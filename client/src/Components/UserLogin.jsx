import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S from './Styles/NavBar.module.css'

export const UserLogin = () => {
<<<<<<< HEAD
  const { user} = useAuth0();

const  img = user.picture ;

  
=======
  const { user } = useAuth0();

  const img = user.picture ;
>>>>>>> 0b451467c5634118538b76611e14dcc8b7fb5325
  
  return (

      <div>

<<<<<<< HEAD
        <img className={S.img} src={img} alt="user.img" />
=======
          <img className={S.userimage} src={user.picture} alt=""/>
>>>>>>> 0b451467c5634118538b76611e14dcc8b7fb5325

      </div>

  );
};