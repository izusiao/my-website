import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useTheme from "@mui/styles/useTheme";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Navigation from "./Navigation";
import Intro from "./Intro";
import Highlights from "./Highlights";

function Home() {
  const theme = useTheme();
  return (
    <Grid container sx={{ backgroundColor: theme.palette.background.light }}>
      <Title />
      <Subtitle />
      <Intro />
      <Navigation />
      <Highlights />
    </Grid>
  );
}

export default Home;
