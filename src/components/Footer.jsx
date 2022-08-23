import React from 'react'
import {
    Divider, Typography,
  } from "@mui/material";
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
      <Typography variant='body1' >
      © 2022 Mohamed Saleh
      </Typography>
      </>
  )
}

export default Footer