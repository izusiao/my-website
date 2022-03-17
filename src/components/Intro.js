import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import useTheme from "@mui/styles/useTheme";
import grey from "@mui/material/colors/grey";
import Mosaic from "../img/mosaic_light.png";

const styles = {
  image: {
    // backgroundImage: `url(${Image1})`,
    // backgroundSize: "5%",
    // backgroundRepeat: "repeat",
    // background: `url(${Mosaic}) repeat center/5%, linear-gradient(90deg, rgba(176,219,255,1) 0%, rgba(99,73,201,1) 100%)`,
    background: `url(${Mosaic}) repeat center/5%, linear-gradient(90deg, rgba(226,121,228,1) 0%, rgba(125,179,224,1) 100%)`,
    // backgroundPosition: "right",
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
        // bgcolor: "text.secondary",
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
