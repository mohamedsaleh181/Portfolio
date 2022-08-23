import React from 'react'
import {
  Box,
  Typography,
  Divider,
  Grid,
  Stack
} from "@mui/material";
function Education() {
  return (
    <>
   
    <Box color="white" id='education' sx={{py:'5rem'}}>
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
              Education
            </Typography>
            <Divider
              sx={{
                mb: "1rem",
                ml: "1rem",
                width: "60%",
                bgcolor: "red",
                height: "1px",
              }}
            />
          </Stack>
      <Grid container>
        <Grid item md={7}>
          {/* <Container> */}
          
          <Typography variant="h4" gutterBottom>
            Intensive code camp (3-months sholarship) @ ITI
          </Typography>
          <Typography>Front-end & mobile cross platform</Typography>
          <Typography>April 2022 to July 2022</Typography>
          <Divider color="red" sx={{ mt: "3rem", mb: "2rem", width: "40%" }} />
          <Typography variant="h4" gutterBottom>
            BE in Mechanical Engineering.
          </Typography>
          <Typography>Alexandria University</Typography>
          <Typography>Graduation year 2019</Typography>
          {/* </Container> */}
        </Grid>
        <Grid item xs={6} display="none">
          <Box backgroundColor="red">1</Box>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default Education