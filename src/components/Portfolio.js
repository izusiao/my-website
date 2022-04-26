import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Img1 from "../img/day02_tulip.png";
import Img2 from "../img/mamaminia_logo.png";
import Img3 from "../img/wallArt.png";
import Img4 from "../img/ballet.png";
import Wrapper from "./Wrapper";

const itemData = [
  { img: Img1, title: "Tulip" },
  { img: Img2, title: "Logo" },
  { img: Img3, title: "Wall art" },
  { img: Img4, title: "Ballet" },
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
