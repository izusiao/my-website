import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Logo from "../img/mamaminia_logo.png";
import Mosaic from "../img/mosaic_light.png";
import JournalItem from "./JournalItem";

const Items = [
  {
    title: "My website is deployed!",
    img: Logo,
    desc: "Hello to my new website!",
    href: "/journal",
  },
  {
    title: "My website is deployed!",
    img: Logo,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/journal",
  },
  {
    title: "My website is deployed!",
    img: Logo,
    desc: "Hello to my new website!",
    href: "/journal",
  },
];

function Highlights() {
  return (
    <Grid
      container
      sx={{
        // background: `url(${Mosaic}) repeat center/5%, linear-gradient(90deg, rgba(176,219,255,1) 0%, rgba(198,73,201,1) 100%)`,
        color: "text.primary",
      }}
    >
      <Container maxWidth="xl" sx={{ pt: 12, pb: 12 }}>
        <Typography
          variant="h2"
          sx={{ color: "text.primary", textAlign: "center", pb: 6 }}
        >
          Highlights
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          {Items.map((journalItem) => (
            <Grid item xs={12} md={6} lg={4}>
              <JournalItem {...journalItem} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}

export default Highlights;
