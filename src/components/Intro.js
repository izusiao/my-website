import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Mosaic from "../img/mosaic_light.png";

const styles = {
  image: {
    background: `url(${Mosaic}) repeat center/5%, linear-gradient(90deg, rgba(226,121,228,1) 0%, rgba(125,179,224,1) 100%)`,
  },
};

function Quote({ children }) {
  return (
    <Grid item>
      <Typography variant="h4" fontStyle="italic" p={{ xs: 3 }} children>
        "{children}"
      </Typography>
    </Grid>
  );
}

function Intro() {
  return (
    <Grid
      container
      sx={{
        ...styles.image,
        color: "text.secondary",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          pt: 12,
          pb: 12,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Grid container spacing={{ md: 12 }} justifyContent="center">
          <Quote>
            Be so <b>GOOD</b> they <br /> can't ignore <b>YOU.</b>
          </Quote>
          <Quote>
            <b>Success</b> is a <b>journey</b> <br /> not a destination.
          </Quote>
          <Quote>
            The key to success
            <br />
            is <b>consistency</b>.
          </Quote>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Intro;
