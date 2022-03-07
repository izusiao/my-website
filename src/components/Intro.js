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

const styles = {
  image: {
    backgroundImage: `url(${Image1})`,
    backgroundSize: "50% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  },
};

function Intro() {
  return (
    <Grid
      container
      sx={{
        ...styles.image,
        // bgcolor: "text.secondary",
        color: "text.primary",
      }}
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
        <Grid
          container
          sm={12}
          md={5}
          p={3}
          pl={{ md: 3 }}
          sx={{
            alignContent: "center",
          }}
        >
          <Typography variant="h3" m={{ sm: 6, md: 0 }}>
            Hello there! My name is <b>Izabela Ograbek</b>. I am an artist and
            web developer. I'd like to share my art journey, experience, and
            knowledge. You're welcome to join it!
          </Typography>
          <Typography variant="h3" fontStyle="italic" mt={4}>
            Sharing unfinished work is almost as important as sharing a
            masterpiece!
          </Typography>
        </Grid>
        <Grid item sm={12} md={7} alignSelf="center"></Grid>
      </Container>
    </Grid>
  );
}

export default Intro;
