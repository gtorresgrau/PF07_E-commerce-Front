import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S from './Styles/NavBar.module.css'

export const UserLogin = () => {
  const { user } = useAuth0();

  const img = user.picture ;
  
  return (

      <div>

          <img className={S.userimage} src={user.picture} alt=""/>

      </div>

  );
};