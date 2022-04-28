import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./About";
import Journal from "./Journal";
import Portfolio from "./Portfolio";
import Home from "./Home";
import ScrollTop from "./ScrollTop";
import PrivacyPolicy from "./PrivacyPolicy";
import Impressum from "./Impressum";
// import Terms from "./Terms";
// import NotFound from "./NotFound";

function Content() {
  return (
    <>
      <Grid container direction="column" alignContent="stretch" mt="60px">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/journal" element={<Journal />} />
          {/* <Route path="/terms" element={<Terms />} /> */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/impressum" element={<Impressum />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
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
