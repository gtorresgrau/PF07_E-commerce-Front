import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
const dotenv = require('dotenv');
dotenv.config()

const ExternalApi = () => {
  const [message, setMessage] = useState('');
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const response = await axios(`${serverUrl}/api/messages/public-message`);

      const responseData = await response.data;
      console.log('resposeData:', responseData)

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await axios(
        `${serverUrl}/api/messages/protected-message`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const responseData = await response.data;

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <h1>External API</h1>
      <p>
        Use these buttons to call an external API. The protected API call has an
        access token in its authorization header. The API server will validate
        the access token using the Auth0 Audience value.
      </p>
      <div
        className=""
        role="group"
        aria-label="External API Requests Examples"
      >
        <button type="button" className="" onClick={callApi}>
          Get Public Message
        </button>
        <button
          type="button"
          className=""
          onClick={callSecureApi}
        >
          Get Protected Message
        </button>
      </div>
      {message && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="">
            <div className="">
              <code className="">{message}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExternalApi;