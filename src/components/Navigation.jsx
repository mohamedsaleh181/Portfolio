import React, {useState} from 'react'
import {
  Button,
  AppBar,
  Toolbar,
  Box,
  Typography,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
//   Container,
//   Stack
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AboutSection from './AboutSection';
import Education from './Education';
import Projects from './Projects';
import ContactUs from './ContactUs';
import { info } from './myData';
import greeting from '../assets/greeting.jpg'
import Social from './Social';
import Footer from './Footer';

const drawerWidth = 240;
const navItems = ['About', 'Education', 'Projects',];

function Navigation(props) {
    const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
// ############################# Drawer ############################## 
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#1a1a1a",
        height: "100%",
        color: "white",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          my: 2,
          fontFamily: ["Silkscreen"],
          cursor:'pointer',
          textDecoration:'none',
          color: "white",
        }}
        gutterButtom
        component='a'
        href='#saleh'
      >
        SA L EH
      </Typography>
      <Divider color="white"/>
      <List>
        {navItems.map((item,i) => (
          <ListItem key={i} disablePadding >
            <ListItemButton
              sx={{
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "rgb(80 80 80)",
                },
              }}
              href={`#${item.toLowerCase()}`}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
// ################################### End of Drawer ########################################################
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", color: "white", width:'100%' , overflow:'hidden' , alignItems: 'center'}}>
      <AppBar component="nav" sx={{ backgroundColor: "#1a1a1a" }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="a"
            sx={{
              flexGrow: 1,
              display: { sm: "block" },
              fontFamily: ["Silkscreen"],
              cursor:'pointer',
          textDecoration:'none',
          color: "white",
            }}
            href='#saleh'
          >
            SALEH
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff", fontSize:'1.25rem', mx:'1rem','&:hover':{
                    color: '#c88c8c'
                } }}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* ############################################################################################## */}
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Grid container sx={{ pt: "135px", pb: "4rem" }} id='saleh'>
          <Grid item lg={6}>
            <Box>
              <Typography variant="h5" component="p">
                Hi there 👋 , I'm
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                fontFamily="Silkscreen"
                color="#c88c8c"
                gutterBottom
              >
                {info.name}
              </Typography>
              <Typography
                variant="h5"
                component="p"
                fontSize="1.75rem"
                letterSpacing="0.5rem"
                gutterBottom
              >
                {info.prev}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                width="75%"
                gutterBottom
                fontSize="1.2rem"
                sx={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                {info.description}
              </Typography>
              <Button variant="outlined" color='error' sx={{ fontSize:"1.5rem"}} href={info.resumeLink}>
                Resume
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} sx={{display: {xs:"none", lg: 'block'}}}>
            <img
              src={greeting}
              alt={info.name}
              loading="lazy"
              width='80%'
            />
          </Grid>
        </Grid>
        {/* ########################################################################################### */}
        <AboutSection />
        {/* ############################################################################################ */}
        <Education />
        {/* ############################################################################################ */}
        <Projects />
        {/* ############################################################################################ */}
        {/* <ContactUs /> */}
        <Social/>
        <Footer/>
      </Box>
    </Box>
  );
}

export default Navigation