import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S from './Styles/NavBar.module.css'

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
<<<<<<< HEAD
    <button className={S.singInButton} onClick={() => logout({ returnTo: "http://localhost:3000/sneakers"||"https://pf-07-e-commerce-front-e03qnrsav-gtorresgrau.vercel.app/" })}>
=======
    <button className={S.joinNowButton} onClick={() => logout({ returnTo: "https://pf-07-e-commerce-front.vercel.app/sneakers/" || "http://localhost:3000/sneakers"})}>
>>>>>>> 0a5fd4bff7a481812961e713953cf7b74071caf2
      Log out
    </button>
  );
};