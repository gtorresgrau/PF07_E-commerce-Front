import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import S from './Styles/NavBar.module.css'

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
<<<<<<< HEAD
    
    <button className={S.singInButton} onClick={() => logout({ returnTo: "http://localhost:3000/sneakers"||"https://pf-07-e-commerce-front-e03qnrsav-gtorresgrau.vercel.app/" })}>
=======

    <div onClick={() => logout({ returnTo: "http://localhost:3000/sneakers" })}>
>>>>>>> bf2ce38c917c69f411144bea3aec3d676e8213b4
      Log out
    </button>
  );
};