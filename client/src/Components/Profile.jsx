import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ('dotenv').config();

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
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <h3>User Metadata</h3>
        {userMetadata? (
            <pre className="col-12 text-light bg-dark p-4">
                {JSON.stringify(userMetadata, null, 2)}
        </pre>):("No user metadata defined")}
      </div>
    </div>
    )
  );
};

export default Profile;