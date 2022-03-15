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

const styles = {
  image: {
    backgroundImage: `url(${Image1})`,
    backgroundSize: "60% 100%",
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
        mt: 12,
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
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            p={3}
            pl={{ md: 3 }}
            sx={{
              alignContent: "center",
            }}
          >
            {/* <Typography variant="h3" m={{ sm: 6, md: 0 }}>
            Hello there! My name is <b>Izabela Ograbek</b>. I am an artist and
            web developer. I'd like to share my art journey, experience, and
            knowledge. You're welcome to join it!
          </Typography>
          <Typography variant="h3" fontStyle="italic" mt={4}>
            Sharing unfinished work is almost as important as sharing a
            masterpiece!
          </Typography> */}
          </Grid>
          <Grid item xs={12} md={7} alignSelf="center">
            <Box
              sx={{
                border: `3px solid ${grey[500]}`,
                borderBottom: "none",
                borderLeft: "none",
                p: 2,
              }}
            >
              <Typography variant="h4" fontStyle="italic">
                Be so <b>GOOD</b> they <br /> can't ignore <b>YOU.</b>
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: `1px dotted ${grey[500]}`,
                mt: 6,
              }}
            ></Box>
            <Box
              sx={{
                border: `3px solid ${grey[500]}`,
                borderTop: "none",
                borderRight: "none",
                p: 2,
                mt: 6,
              }}
            >
              <Typography variant="h4" fontStyle="italic">
                <b>Success</b> is a <b>journey</b> <br /> not a destination.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Intro;
