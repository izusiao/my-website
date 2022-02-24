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
import Image1 from "../img/doodle1.png";
import Image2 from "../img/doodle2.png";
import Image3 from "../img/twoHeartsOneSoul.png";
import Image4 from "../img/mamaminia_logo.png";

const styles = {
  gridDescrip: {
    backgroundImage: `url(${Image1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
      })}
    >
      <Container
        maxWidth="xl"
        sx={{
          pt: 12,
          pb: 12,
        }}
      >
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid
            item
            sm={12}
            lg={6}
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            <Typography variant="h3">Welcome to my world of</Typography>
            <Typography variant="h2">
              <b>art and design</b>
            </Typography>
            <Box component="img" src={Image3} sx={{ height: "500px" }} />
          </Grid>
          <Grid
            container
            sm={12}
            lg={6}
            sx={{ position: "relative", alignContent: "center" }}
          >
            <Box
              component="img"
              src={Image1}
              sx={{ height: "500px", minWidth: "350px" }}
            ></Box>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ position: "absolute", top: 0, p: 12 }}
            >
              Hello there! My name is <b>Izabela Ograbek</b>. I am an artist and
              web developer. <br /> I'd like to share my art journey, experience,
              and knowledge. <br />
              You're welcome to join it!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Subtitle;
