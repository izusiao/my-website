import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import useTheme from "@mui/styles/useTheme";
import Image from "../img/tree.png";
import Pattern from "../img/artistic_background.png";
import Logo from "../img/mamaminia_logo.png";
import Mosaic from "../img/mosaic_light.png";

const styles = {
  image: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "500px",
    minWidth: "350px",
  },
  grid: {
    // backgroundImage: `url(${Pattern})`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    background: `url(${Mosaic}) repeat center/5%, linear-gradient(90deg, rgba(255,226,0,1) 0%, rgba(255,141,0,1) 100%)`,
  },
};

function Title() {
  const theme = useTheme();
  return (
    <Grid container sx={{ ...styles.grid }}>
      <Container maxWidth="xl">
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item sx={styles.image} sm={12} lg={6}></Grid>
          <Grid
            item
            sm={12}
            lg={6}
            sx={{
              alignSelf: "center",
              color: "text.secondary",
            }}
          >
            <Typography
              variant="h1"
              textAlign="center"
              sx={{ letterSpacing: 6, m: 1, fontWeight: 700 }}
            >
              art.
              <br />
              design.
              <br />
              web.
            </Typography>
            {/* <Box elevation={0}>
              <Typography
                component="div"
                color="text.primary"
                variant="h1"
                textAlign="center"
              >
                <Box sx={{ letterSpacing: 6, m: 1 }}>art. design. web.</Box>
                <Box sx={{ letterSpacing: 3, m: 1 }}>
                  by <b>mamaminia</b>
                </Box>
              </Typography>
            </Box> */}
          </Grid>
        </Grid>
        {/* <Grid container sx={{ justifyContent: "center" }}>
          <Box component="img" src={Logo} sx={{ height: "500px" }} />
        </Grid> */}
      </Container>
    </Grid>
  );
}

export default Title;
