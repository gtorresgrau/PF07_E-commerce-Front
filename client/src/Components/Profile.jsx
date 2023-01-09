import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; 
import S from '../Components/Styles/Profile.module.css'


const Profile = () => {
  const { user, isAuthenticated} = useAuth0();
  const { name, picture, email } = user;

  return (
    isAuthenticated &&(
      <div className={S.general}>
          <Link to='/sneakers'>
              <button className={S.back}>Back</button>
          </Link>
          <div className={S.container}>
            <div className="">
              <img
                src={picture}
                alt="Profile"
                className={S.img}
              />
            </div>
            <div className="">
              <h2>{name}</h2>
              <p className={S.datos}>{email}</p>
            </div>
            <div className="">
              <h3>User Metadata</h3>
              {user? (
                  <pre className={S.datos}>
                      {JSON.stringify(user, null, 2)}
                  </pre>
                  ):("No user metadata defined")
              }
            </div>
          </div>
      </div>
    )
  );
};

export default Profile;