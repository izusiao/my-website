import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Wrapper from "./Wrapper";
import Me from "../img/me_about.png";

function About() {
  return (
    <Wrapper title="About me">
      <Grid container>
        <Grid
          item
          md={6}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box component="img" src={Me} width="80%" p={{ xs: 1, md: 3 }}></Box>
        </Grid>
        <Grid item md={6} xs={12} p={{ xs: 1, md: 3 }}>
          <Typography variant="h3" color="text.primary">
            Hello! My name is Izabela Ograbek. I am a polish artist based in
            Germany. I love digital painting, watercolor painting, photography,
            astronomy, sewing and crocheting. I'd like to make you happy with my
            artwork :){" "}
          </Typography>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default About;
