import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import useTheme from "@mui/styles/useTheme";
import Image from "../img/tree.png";
import Pattern from "../img/artistic_background.png";

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
    backgroundImage: `url(${Pattern})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};

function Title() {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{ ...styles.grid }}
    >
      <Container maxWidth="xl">
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item sx={styles.image} sm={12} lg={6}></Grid>
          <Grid
            item
            sm={12}
            lg={6}
            alignItems="center"
            justifyContent="center"
            color="text.primary"
          >
            <Typography
              variant="h1"
              textAlign="center"
              sx={{ letterSpacing: 6, m: 1 }}
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
      </Container>
    </Grid>
  );
}

export default Title;
