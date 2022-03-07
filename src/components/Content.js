import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import React from 'react'
import { Route, Routes } from "react-router-dom"
import About from './About'
import Blog from './Blog'
import Gallery from './Gallery'
import Home from './Home'
import ScrollTop from './ScrollTop'


function Content() {
  return (
    <Grid item>
      <Grid container
        direction="column"
        alignContent="stretch"
        mt="60px">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </Grid>
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Grid>
  )
}

export default Content
