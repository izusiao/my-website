import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tulip from "../img/day02_tulip.png";
import Logo from "../img/mamaminia_logo.png";
import WallArt from "../img/wallArt.png";
import Ballet from "../img/ballet.png";
import Stabilo from "../img/stabilo.png";
import Bunch from "../img/bunchOfFlo.png";
import FlowersOnFlower from "../img/floOnFlo.png";
import Footprints from "../img/footprints.png";
import Rainbow from "../img/rainbowAtNight.png";
import Field from "../img/field.png";
import Ball from "../img/ball.png";
import Newspaper from "../img/newspaper.png";
import TulipWithHearts from "../img/tulipWithHearts.png";
import PastelRainbow from "../img/pastelRainbow.png";
import Star from "../img/star.png";
import Wrapper from "./Wrapper";

const itemData = [
  { img: Tulip, title: "Tulip" },
  { img: Bunch, title: "Bunch of flowers" },
  { img: TulipWithHearts, title: "Tulip with hearts" },
  { img: Footprints, title: "Footprints" },
  { img: Rainbow, title: "Rainbow at night" },
  { img: Field, title: "Field" },
  { img: PastelRainbow, title: "Pastel rainbow" },
  { img: Stabilo, title: "Stabilo marker" },
  { img: Star, title: "Star" },
  { img: Ball, title: "Floral ball" },
  { img: FlowersOnFlower, title: "Flowers on flower" },
  { img: Newspaper, title: "Newspaper" },
  { img: Logo, title: "Logo" },
  { img: WallArt, title: "Wall art" },
  { img: Ballet, title: "Ballet" },
];

function Portfolio() {
  return (
    <Wrapper title="Portfolio">
      <Grid container justifyContent="center" spacing={3}>
        {itemData.length > 0 ? (
          itemData.map(({ img, title }) => (
            <Grid item md={6} lg={4} alignSelf="center" key={title}>
              <Box
                component="img"
                alt={title}
                src={img}
                maxHeight={500}
                maxWidth="100%"
              />
            </Grid>
          ))
        ) : (
          <Grid item alignSelf="center">
            <Typography variant="h4">
              Sorry, there is no content yet.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Wrapper>
  );
}

export default Portfolio;
