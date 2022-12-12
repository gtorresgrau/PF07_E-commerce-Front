<<<<<<< HEAD


=======
>>>>>>> fdd3082b456c4a1247ad9a1873c35dc3b3e14d71
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S from './Styles/NavBar.module.css'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className={S.singInButton} onClick={() => loginWithRedirect()}>Sign In / Sign Up</button>;
};