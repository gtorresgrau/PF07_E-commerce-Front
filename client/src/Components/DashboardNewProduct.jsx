import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import IconList from '@mui/icons-material/ListAlt';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import DashboardProducts from './DashboardProducts';
import AddSneaker from './AddSneaker';
import AccountMenu from './AccountMenu';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
  },
});

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  




  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItemButton href="/sneakers" >
            <ListItemIcon>
            <IconList />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton href='/admin'>
          <ListItemIcon>
            <IconList />
          </ListItemIcon>
          <ListItemText primary="Product" />
        </ListItemButton>
            <ListItemButton href='/addSneaker'>
            <ListItemIcon>
              <IconList />
            </ListItemIcon>
            <ListItemText primary="New Product" />
          </ListItemButton>
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        theme= {theme}
        color= "primary"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar  sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>

          <AccountMenu/>

        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="mailbox folders"
        
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` } }}
      >
        <Toolbar />
        <AddSneaker/>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
