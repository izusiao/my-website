import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Etsy from "../img/etsy_highlight.png";
import Youtube from "../img/yt_04.png";
import Panda from "../img/panda.png";
import JournalItem from "./JournalItem";

const Items = [
  {
    title: "My etsy shop - mamaminiaArt!",
    img: Etsy,
    desc: "Check out my etsy shop!",
    href: "https://www.etsy.com/shop/mamaminiaArt",
  },
  {
    title: "New video on YouTube!",
    img: Youtube,
    desc: "A new video is here. Next episode of Krita tutorial - Brushes.",
    href: "https://youtu.be/6y01AOgnHYQ",
  },
  {
    title: "My first timelapse painting on YouTube!",
    img: Panda,
    desc: "Paint, record & show! This is how my process looks like :)",
    href: "https://youtu.be/f3Wn-Sm8of0",
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
            <Grid item xs={12} md={6} lg={4} key={journalItem.title}>
              <JournalItem {...journalItem} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}

export default Highlights;
