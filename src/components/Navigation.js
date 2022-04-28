import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import useTheme from "@mui/styles/useTheme";
import Image1 from "../img/nav_portfolio.png";
import Image2 from "../img/nav_journal.png";
import Image3 from "../img/nav_about.png";

const items = [
  { img: Image1, href: "portfolio", title: "Portfolio" },
  { img: Image2, href: "journal", title: "Journal" },
  { img: Image3, href: "about", title: "About me" },
];

function Navigation() {
  const theme = useTheme();
  return (
    <Grid container bgcolor={theme.palette.background.main}>
      <Container maxWidth="xl" sx={{ pt: 12, pb: 12 }}>
        <Typography
          variant="h2"
          sx={{ color: "text.primary", textAlign: "center", pb: 6 }}
        >
          Get to know me better
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {items.map(({ img, href, title }) => (
            <Grid item sm={12} lg={4} key={title}>
              <Link
                to={{ pathname: `/${href}` }}
                style={{ textDecoration: "none" }}
              >
                <Card
                  variant="outlined"
                  square
                  sx={(theme) => ({
                    backgroundColor: "transparent",
                    maxWidth: "370px",
                    m: "auto",
                    p: 3,
                    color: theme.palette.primary.main,
                    "&:hover": {
                      bgcolor: theme.palette.primary.light,
                      color: "text.secondary",
                    },
                  })}
                >
                  <CardMedia
                    component="img"
                    height="300px"
                    image={img}
                    alt={title}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h4" color="inherit">
                      {title}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}

export default Navigation;
