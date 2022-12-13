import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S from './Styles/NavBar.module.css'

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (

    <div onClick={() => logout({ returnTo: "https://pf-07-e-commerce-front.vercel.app/sneakers/"})}>
      Log out
    </div>
  );
};