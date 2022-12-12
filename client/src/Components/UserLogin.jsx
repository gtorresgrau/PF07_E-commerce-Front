import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S from './Styles/NavBar.module.css'


export const UserLogin = () => {
  const { user} = useAuth0();



  return (

      <div>

        <h2 className={S.singInButton}>{user.name}</h2>

      </div>

  );
};