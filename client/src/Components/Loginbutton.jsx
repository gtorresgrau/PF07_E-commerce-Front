import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S from './Styles/NavBar.module.css'

export const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return <div className={S.logButton} onClick={() => loginWithPopup()}>Log in</div>
};