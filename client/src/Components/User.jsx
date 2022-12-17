import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  
    const getUserMetadata = async () => {
      const domain = "dev-frontpf08.us.auth0.com";
      const { Json}  = JSON.stringify(user,null,2)  ;
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
        localStorage.setItem("token", accessToken);
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
        
        let metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
         setUserMetadata = await metadataResponse.json();
          
      
        return setUserMetadata;
      } catch (e) {
        console.log(e.message);
      }
    };
  console.log( user) 
    return getUserMetadata;
  }



export default Profile;