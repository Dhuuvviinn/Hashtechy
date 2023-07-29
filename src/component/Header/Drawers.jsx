import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Outlet } from 'react-router-dom';
import "./Drawers.css"
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const Drawers = ({authentication}) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{display:"flex",background:"black",alignItems:"center",justifyContent:"space-between"}} >
        <Typography variant="h6" sx={{marginLeft:"3rem"}}  component="div">
          Hashtechy
        </Typography>
        {
          authentication &&  <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={authentication && handleDrawerOpen} 
          sx={{ ...(open ? { display:'flex'  }:{marginRight:"3rem"}) }}
        >
          <MenuIcon />
        </IconButton>
        }
       
      </Toolbar>
    </AppBar>
    <Main open={open} sx={authentication && {height:"100vh"}}>
        <DrawerHeader />
        <Outlet/>
      </Main>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          border:"none",
          background:"#E3E5E1"
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader sx={{background:"black"}}>
      
      </DrawerHeader>
      <List >
        {/* ----------CloaseTage */}
        <ListItem sx={{marginBottom:"-20px"}}>
           <ListItemButton>
               <ListItemText primary={"Close Menu"}/>
               <ListItemIcon onClick={handleDrawerClose}>

                  <ChevronRightIcon />
               </ListItemIcon>
           </ListItemButton>
        </ListItem>

        
        <ListItem sx={{marginBottom:"-20px"}}>
           <ListItemButton>

           <ListItemText primary={"Categories"}/>
               <ListItemIcon onClick={handleDrawerClose}>
                 ----
               </ListItemIcon>
               
           </ListItemButton>
        </ListItem>
        <ListItem>
           <ListItemButton>
           <ListItemText primary={"Makeup"}/>

               <ListItemIcon >
                 ----
               </ListItemIcon>
           </ListItemButton>
        </ListItem>
      </List>
     
    </Drawer>


  </Box>
  )
}

export default Drawers
