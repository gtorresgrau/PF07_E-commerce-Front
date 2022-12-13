import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import S from './Styles/NavBar.module.css'

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
<<<<<<< HEAD
    <button className={S.singInButton} onClick={() => logout({ returnTo: "http://localhost:3000/sneakers"||"https://pf-07-e-commerce-front-e03qnrsav-gtorresgrau.vercel.app/" })}>
=======

    <div onClick={() => logout({ returnTo: "https://pf-07-e-commerce-front.vercel.app/sneakers/"})}>
>>>>>>> 0b451467c5634118538b76611e14dcc8b7fb5325
      Log out
    </div>
  );
};