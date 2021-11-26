import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import React from 'react'
import { Route, Routes } from "react-router-dom"
import About from './About'
import Blog from './Blog'
import Galery from './Galery'
import Home from './Home'
import ScrollTop from './ScrollTop'


function Content() {
  return (
    <Grid item px={1} py={10}>
      <Grid container
        direction="column"
        alignContent="stretch">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="galery" element={<Galery />} />
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
