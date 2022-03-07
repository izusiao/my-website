import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Img1 from "../img/panda_blue_violet.png";
import Img2 from "../img/tree.png";
import Img3 from "../img/mamaminia_logo.png";
import Img4 from "../img/twoHeartsOneSoul.png";
import useTheme from "@mui/styles/useTheme";

const itemData = [
  { img: Img1, title: "1" },
  { img: Img2, title: "2" },
  { img: Img3, title: "3" },
  { img: Img4, title: "4" },
  { img: Img1, title: "5" },
  { img: Img2, title: "6" },
  { img: Img3, title: "7" },
  { img: Img4, title: "8" },
];

function Gallery() {
  const theme = useTheme();
  console.log("theme", theme);
  return (
    <Grid container justifyContent="center" spacing={3} pl={30} pr={30}>
      {itemData.map((item) => (
        <Grid item md={6} lg={4} alignSelf="center">
          <Box component="img" src={item.img} maxHeight={500} maxWidth="100%" />
        </Grid>
      ))}
    </Grid>
  );
}

export default Gallery;
