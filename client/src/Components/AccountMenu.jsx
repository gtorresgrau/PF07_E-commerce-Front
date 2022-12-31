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
import { Link } from 'react-router-dom';

export default function AccountMenu() {
  const { isAuthenticated } = useAuth0();
  
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
          <Link to='/profile' ><MenuItem>Profile</MenuItem></Link>
          <Link to='/userform' ><MenuItem>Complete Profile</MenuItem></Link>
          
        </Menu>
      </div>
    
      }
    </div>
  );
}