import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useTheme from "@mui/styles/useTheme";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Navigation from "./Navigation";
import Intro from "./Intro";

function Home() {
  const theme = useTheme();
  return (
    <Grid container sx={{ backgroundColor: theme.palette.text.secondary }}>
      <Title />
      <Subtitle />
      <Intro />
      <Navigation />
    </Grid>
  );
}

export default Home;
