import * as React from "react";
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardActions,
  Button,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import { projects } from "./myData";

export default function Projects() {
  return (
      <>
    <Box id="projects" sx={{ py: "5rem" }}>
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
      Projects
    </Typography>
    <Divider
      sx={{
        mb: "1rem",
        ml: "1rem",
        width: "65%",
        bgcolor: "red",
        height: "1px",
      }}
    />
  </Stack>
      
      <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       {
           projects.map((project,i)=>{
            return <Grid item key={i} xs={12} sm={6} md={4} sx={{justifyContent:'center',alignItems:'center', display:'flex'}}>
            <Card sx={{width: 345 , height: 330, backgroundColor:'#141421', color:'white', }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt="freshio"
                />
                <CardContent >
                  <Typography  gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography  minHeight="65px" variant="body2" color="text.secondary" sx={{color:'white',}}>
                    {project.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color='error' size="small" target="_blank" href={project.demo}>Demo</Button>
                  <Button color='error' size="small" target="_blank" href={project.github}>Source</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
           })
       }
      </Grid>
    </Box>
    </>
  );
}
