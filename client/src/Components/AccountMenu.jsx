import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiOutlineUser } from 'react-icons/hi';
import S from './Styles/NavBar.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './Loginbutton.jsx';
import { LogoutButton } from './Logoutbutton.jsx';
import { UserLogin } from './UserLogin.jsx';
import { SignUpButton } from './SignUpButton';
<<<<<<< HEAD
//import Profile from './User';
=======
import { Link } from 'react-router-dom';
>>>>>>> b743071337f4b4448a89be17c98adf2134bbee29

export default function AccountMenu() {
  const { isAuthenticated} = useAuth0();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>

      { !isAuthenticated ?

      <div>
        <div
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <HiOutlineUser className={S.user}/>
        </div>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >

          <MenuItem onClick={handleClose}><LoginButton /></MenuItem>
          <MenuItem onClick={handleClose}><SignUpButton /></MenuItem>
        </Menu>
         
      </div>
      
      :

      <div>
        <div
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <UserLogin/>
        
        </div>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}><LogoutButton /></MenuItem>
<<<<<<< HEAD
          <MenuItem onClick={handleClose}>profile</MenuItem>
=======
          <Link to='/Profile' ><MenuItem>Profile</MenuItem></Link>
>>>>>>> b743071337f4b4448a89be17c98adf2134bbee29
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>
      </div>
    
      }
    </div>
  );
}