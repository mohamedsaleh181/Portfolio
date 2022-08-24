import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
    Divider, IconButton, Typography,
  } from "@mui/material";
import { info } from "./myData";


function Footer() {
  return (
      <>
        <Divider
      sx={{
        mb: "2rem",
        width: "100%",
        bgcolor: "red",
        height: "1px",
      }}
      />
      <Typography variant='body1' display="inline-block"  >
      © 2022 Mohamed Saleh
      </Typography>
      <IconButton href={info.github} target='_blank'>
          <GitHubIcon sx={{color: 'white'}}/>
      </IconButton>
      <IconButton href={info.linkedin} target='_blank'>
          <LinkedInIcon sx={{color: 'white'}}/>
      </IconButton>
      </>
  )
}

export default Footer