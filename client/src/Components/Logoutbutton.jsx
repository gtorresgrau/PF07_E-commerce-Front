import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S from './Styles/NavBar.module.css'

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className={S.singInButton} onClick={() => logout({ returnTo: "http://localhost:3000/sneakers"||"https://pf-07-e-commerce-front-e03qnrsav-gtorresgrau.vercel.app/" })}>
      Log out
    </button>
  );
};