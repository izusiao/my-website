import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Bullet from "../img/bullet.png";
import Flowers from "../img/flowers.png";

function Block({ children }) {
  return (
    <ListItem sx={{ pl: 0, mt: 6, mb: 6 }}>
      <ListItemIcon>
        <Box component="img" src={Bullet} sx={{ height: "60px", mr: 3 }} />
      </ListItemIcon>
      <ListItemText disableTypography variant="h2" children={children} />
    </ListItem>
  );
}

function Subtitle() {
  return (
    <Grid
      container
      sx={(theme) => ({
        bgcolor: theme.palette.background.main,
        color: "text.primary",
      })}
    >
      <Container
        maxWidth="xl"
        sx={{
          pt: 16,
          pb: 12,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h2">Welcome to my world of</Typography>
        <Typography variant="h1">
          <b>art and design</b>
        </Typography>
        <Grid container mt={6}>
          <Grid
            item
            sm={12}
            md={6}
            pl={{ md: 10 }}
            p={{ xs: 4, sm: 6 }}
            sx={{
              alignContent: "left",
              textAlign: "left",
            }}
          >
            <Typography component="div" variant="h3">
              My name is <b>Izabela Ograbek</b>.
            </Typography>
            <Typography component="div" variant="h4">
              <List>
                <Block>I am an artist and web developer.</Block>
                <Block>
                  I'd like to share my art journey, experience, and knowledge.
                </Block>
                <Block>You're welcome to join it!</Block>
              </List>
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} alignSelf="center" justifyContent="center">
            <Box
              component="img"
              src={Flowers}
              sx={{ maxWidth: "100%", maxHeight: "500px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Subtitle;
