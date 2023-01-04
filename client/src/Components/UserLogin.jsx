import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S from './Styles/NavBar.module.css'
import { FaUser } from 'react-icons/fa';

export const UserLogin = () => {
  const { user } = useAuth0();

  const img = user.picture;
  const name = user.name;
  return (

    <div>

{img ? (
        <img className={S.userimage} src={img} alt={name } />
      ) : (
        <FaUser className={S.userimage} />
      )}

    </div>

  );
};