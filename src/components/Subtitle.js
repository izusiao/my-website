import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import useTheme from "@mui/styles/useTheme";
import grey from "@mui/material/colors/grey";
import Image1 from "../img/doodle1.png";
import Image2 from "../img/doodle2.png";
import Image3 from "../img/twoHeartsOneSoul.png";
import Image4 from "../img/panda_blue_green.png";

const styles = {
  gridDescrip: {
    backgroundImage: `url(${Image1})`,
    backgroundSize: "contain",
    backgroundRepeat: "repeat",
    backgroundPosition: "center center",
  },
  image: {
    backgroundImage: `url(${Image2})`,
    backgroundSize: "contain",
    minWidth: "350px",
  },
};

function Subtitle() {
  return (
    <Grid
      container
      sx={(theme) => ({
        ...styles.image,
        bgcolor: theme.palette.secondary.main,
        color: "text.secondary",
      })}
    >
      <Container
        maxWidth="xl"
        sx={{
          pt: 12,
          pb: 12,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h1">
          Welcome to my world of <b>art and design</b>
        </Typography>
        <Grid
          container
          mt={6}
          // sx={{
          //   justifyContent: "center",
          //   bgcolor: "text.secondary",
          //   p: 3,
          //   mt: 6,
          // }}
        >
          <Grid item sm={12} md={7} alignSelf="center">
            <Box
              component="img"
              src={Image4}
              height={{ lg: "500px", md: "350px" }}
              maxWidth={{ xs: "100%" }}
              bgcolor="text.secondary"
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={5}
            p={3}
            pl={{ md: 3 }}
            sx={{
              // ...styles.gridDescrip,
              alignSelf: "center",
              width: "100%",
            }}
          >
            <Box sx={{ border: `3px solid ${grey[50]}`, p: 2 }}>
              <Typography variant="h2" fontStyle="italic">
                Be so <b>GOOD</b> they <br /> can't ignore <b>YOU.</b>
              </Typography>
            </Box>
            <Box sx={{ border: `3px solid ${grey[50]}`, p: 2, mt: 4 }}>
              <Typography variant="h2" fontStyle="italic">
                <b>Success</b> is a <b>journey</b> <br /> not a destination.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Subtitle;
