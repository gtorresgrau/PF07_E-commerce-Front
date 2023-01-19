import { Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import S from "../Components/Styles/Profile.module.css";
import { useSelector } from "react-redux";
import Footer from "./Footer";


import logo from "../Images/logo2.png";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture } = user;
  const users = useSelector((state) => state.users);

  const userAdmin = users.find((e) => e.email === user.email);

  return (
    <div className={S.general}>
      <nav className={S.display}>
        <div className={S.displayLeft}>
          <img className={S.logo} src={logo} width="250rem" alt="Hsneaker" />
        </div>
        
      </nav>
      <div className={S.displayContainer}>
        <h2>Hi, {name}!</h2>
        <div className={S.img}>
          <img src={picture} alt="Profile" className={S.img} />
        </div>
        <h3>Name: {user.given_name}</h3>
        <h3>Lastname: {user.family_name}</h3>
        <h3>Email: {user.email}</h3>
        {user.email_verified ? (
          <h4>User Verified ✅</h4>
        ) : (
          <h4>User NO Verified ❌</h4>
        )}
        {userAdmin && userAdmin.isAdmin ? (
          <Link to="/admin">
            {" "}
            <button className={S.btnDash}>Dashboard</button>{" "}
          </Link>
        ) : null}
        <h3>Purchase History</h3>
        <Link to="/users">
          {" "}
          <button className={S.btnDash}>Purchase Dashboard</button>{" "}
        </Link>
      </div>
      <Link to="/sneakers">
        {" "}
        <button className={S.btnDash}>Back</button>{" "}
      </Link>
      <Footer />
    </div>
  );
};

export default Profile;
