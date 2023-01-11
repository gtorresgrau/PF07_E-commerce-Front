import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import S from '../Components/Styles/Profile.module.css'
import { useSelector } from 'react-redux';
//import axios from 'axios';


const Profile = () => {
  const { user } = useAuth0();
  const { name, picture } = user;
  const users = useSelector((state) => state.users)

  const userAdmin = users.find(e => e.email === user.email)
  //console.log("Usuario", userAdmin)


  // const userInDb =async(email)=>{
  //   const userdb = await axios.get(`/user?email=${email}`)
  // }

  return (
    <div className={S.general}>
      <div>
        <Link to='/sneakers'> <button className={S.btn}>Back</button> </Link>
        <h2>Hi, {name}!</h2>
        <div className={S.img} >
          <img src={picture} alt="Profile" className={S.img} />
        </div>
        <h3>Name: {user.given_name}</h3>
        <h3>Lastname: {user.family_name}</h3>
        <h3>Email: {user.email}</h3>{user.email_verified ? <h4>User Verified ✅</h4> : <h4>User NO Verified ❌</h4>}
        {userAdmin.isAdmin ? <Link to='/admin'> <button className={S.btnDash}>Dashboard</button> </Link> : null}
      </div>
    </div>
  );
};

export default Profile;