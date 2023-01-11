import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import DashboardProducts from './DashboardProducts';
import AddSneaker from './AddSneaker';
import AccountMenu from './AccountMenu';
import Users from './Users'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };




  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      
      <Tabs
        theme={theme}
        textColor="primary"
        indicatorColor="primary"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab 
        sx={{ fontSize: '1rem', textTransform:'capitalize',  justifyContent: 'flex-start'}}
        icon={<FormatListBulletedIcon/>}
        iconPosition="start"
        label="Products" {...a11yProps(0)}
        />
        <Tab 
        sx={{ fontSize: '1rem', textTransform:'capitalize',  justifyContent: 'flex-start'}}
        icon={<AddCircleOutlineIcon/>}
        iconPosition="start"
        label="New Product" {...a11yProps(1)}
        />
        <Tab 
        sx={{ fontSize: '1rem', textTransform:'capitalize',  justifyContent: 'flex-start'}}
        icon={<PeopleIcon/>}
        iconPosition="start"
        label="Users" {...a11yProps(2)}
        />
        <Tab 
        sx={{ fontSize: '1rem', textTransform:'capitalize',  justifyContent: 'flex-start'}}
        icon={<HomeIcon/>}
        iconPosition="start"
        label="Home"
        href="/sneakers"
        />
      </Tabs>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        theme={theme}
        color="primary"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: {
            sm: `${drawerWidth}px`,
          },
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
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
            Admin Dashboard
          </Typography>
          <AccountMenu />
        </Toolbar>

      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
        sx={{
          flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar />
        <Box sx={{ width: '100%' }}>
          <TabPanel value={value} index={0}>
            <DashboardProducts />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AddSneaker />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Users />
          </TabPanel>
    </Box>
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
