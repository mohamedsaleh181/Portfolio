import React from 'react'
import {
    Button,
    Box,
    Typography,
    Divider,
    Grid,
    Stack,
    Avatar,
  } from "@mui/material";
  import { info } from './myData';
  import image from '../assets/profile.jpg'


function AboutSection() {
  return (
    <Box color="white" id='about' sx={{py:'5rem',}}>
      <Stack direction="row" alignItems="center" mb='5rem'>
            <Divider
              sx={{
                mb: "1rem",
                mr: "1rem",
                width: "15%",
                bgcolor: "red",
                height: "1px",
              }}
            />
            <Typography variant="h2" component="h2" gutterBottom>
              About
            </Typography>
            <Divider
              sx={{
                mb: "1rem",
                ml: "1rem",
                width: "68%",
                bgcolor: "red",
                height: "1px",
              }}
            />
          </Stack>
      <Grid container sx={{justifyContent:'center'}}>
        <Grid item md={7} sx={{justifyContent:'center',alignItems:'center',textAlign:{xs:'center',md:'left'}}}>
          {/* <Container> */}
          
          <Typography
            variant="body1"
            component="p"
            overflow="wrap"
            lineHeight="2"
            fontSize="1.1rem"
            gutterBottom
          >
            {info.about}
          </Typography>
          <Grid
            container
            spacing={2}
            width="75%"
            textAlign="center"
            sx={{ paddingLeft: "3rem", py: "2.5rem" }}
          >
           {
             info.skills.map((skill,i)=>{
             return <Grid item key={i} sx={{margin: 'auto',justifyContent:'center',alignItems:'center',textAlign:{xs:'center',md:'left'} }}>
              <Button variant="contained" color="error">
                {skill}
              </Button>
            </Grid>
             })
           } 
          </Grid>
          {/* </Container> */}
        </Grid>
        <Grid item xs={12} sm={5}  >
      <Avatar alt="Cindy Baker" align='top' src={image} sx={{ width: {xs:250, sm:400}, height: {xs:250, sm:400},mx:'1rem' }}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection