import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { name, picture, email } = user;
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    isAuthenticated &&(
    <div>
      <div className="">
        <div className="">
          <img
            src={picture}
            alt="Profile"
            className=""
          />
        </div>
        <div className="">
          <h2>{name}</h2>
          <p className="">{email}</p>
        </div>
      </div>
      <div className="">
        <h3>User Metadata</h3>
        {userMetadata? (
            <pre className="">
                {JSON.stringify(userMetadata, null, 2)}
        </pre>):("No user metadata defined")}
      </div>
    </div>
    )
  );
};

export default Profile;