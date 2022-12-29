import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const SignUpButton = () => {
  const { loginWithPopup } = useAuth0();

  return <div onClick={() => loginWithPopup({screen_hint:'signup',})}>Sign up</div>
};