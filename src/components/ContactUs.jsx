import React from 'react'
import {
  CardContent,
  Card,
  TextField,
  Stack,
  Divider,
  Typography,
  Grid,
  Box,
} from "@mui/material";

function ContactUs() {
  return (
    <Box width="100%" id='contact'>
      <Stack direction="row" alignItems="center" mb="5rem">
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
          Contacts
        </Typography>
        <Divider
          sx={{
            mb: "1rem",
            ml: "1rem",
            width: "50%",
            bgcolor: "red",
            height: "1px",
          }}
        />
      </Stack>
      <Card
        bgcolor="#1a1a1a"
        raised="true"
        sx={{ bgcolor: "#1a1a1a", maxWidth: "80%", my: "auto" }}
      >
        <CardContent>
          <form>
            <Grid container direction="column">
              <Grid item xs>
                <TextField
                  id="fullName"
                  label="Full Name"
                  variant="standard"
                  fullWidth
                  required
                  InputLabelProps={{
                    style: { color: "white",
                    fontSize:'1.5rem' },
                  }}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="email"
                  label="Email"
                  variant="standard"
                  type="password"
                  fullWidth
                  required
                  InputLabelProps={{
                    style: { color: "white",
                    fontSize:'1.5rem',py:'2rem' },
                  }}
                  sx={{
                      my: '2rem'
                  }}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="message"
                  label="Message"
                  variant="standard"
                  fullWidth
                  multiline
                  rows={4}
                  required
                  InputLabelProps={{
                    style: { color: "white",
                fontSize:'1.5rem' },
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ContactUs