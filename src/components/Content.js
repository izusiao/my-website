import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Home from "./Home";
import ScrollTop from "./ScrollTop";
import NotFound from "./NotFound";

function Content() {
  return (
    <>
      <Grid container direction="column" alignContent="stretch" mt="60px">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/portfolio" element={<Gallery />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Grid>
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default Content;
