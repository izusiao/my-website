import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import Container from "@mui/material/Container";
import grey from "@mui/material/colors/grey";
import makeStyles from "@mui/styles/makeStyles";
import Me from "../img/me.png";

const useStyles = makeStyles((theme) => ({
  menuLink: {
    fontSize: 20,
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "none",
    fontFamily: '"Cormorant", serif',
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  contact: {
    lineHeight: 1.6,
  },
}));

const social = [
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/mamaminia_art/",
  },
  {
    icon: <YouTubeIcon />,
    href: "https://www.youtube.com/channel/UCGc2uA6FV1LINPtEfZFm02g",
  },
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/mamaminia",
  },
  {
    icon: <LibraryMusicIcon />,
    href: "https://www.tiktok.com/@mamaminia.art",
  },
  {
    icon: <PinterestIcon />,
    href: "https://pin.it/3MbFnid",
  },
  {
    icon: <GitHubIcon />,
    href: "https://github.com/izusiao",
  },
];

const navItems = [
  {
    title: "Home",
    path: "",
  },
  {
    title: "Portfolio",
    path: "portfolio",
  },
  {
    title: "Journal",
    path: "journal",
  },
  {
    title: "About me",
    path: "about",
  },
  {
    title: "Shop",
    path: "https://www.etsy.com/shop/mamaminiaArt",
  },
];

function FooterIcon({ href, children }) {
  const classes = useStyles();
  return (
    <Link
      sx={{ m: 1 }}
      href={href}
      className={classes.menuLink}
      target="_blank"
      rel="noopener"
    >
      {children}
    </Link>
  );
}
function FooterTitle({ children }) {
  return (
    <Box sx={{ mb: 3, pb: 1, fontWeight: 700, fontSize: 20 }} borderBottom={1}>
      {children}
    </Box>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" bgcolor={grey[500]}>
      <Container
        maxWidth="xl"
        sx={{
          pt: 6,
          pb: 6,
          justifyContent: "center",
          textAlign: "center",
          color: grey[300],
        }}
      >
        <Grid container spacing={6}>
          <Grid md={6} xs={12} item>
            <FooterTitle>Navigation</FooterTitle>
            {navItems.map(({ path, title }) => (
              <Box pt={1} pb={1} key={title}>
                {title !== "Shop" ? (
                  <RouterLink
                    to={{ pathname: `/${path}` }}
                    className={classes.menuLink}
                  >
                    {title}
                  </RouterLink>
                ) : (
                  <Link
                    className={classes.menuLink}
                    sx={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener"
                    href={path}
                  >
                    {title}
                  </Link>
                )}
              </Box>
            ))}
          </Grid>
          <Grid md={6} xs={12} item>
            <FooterTitle>Contact</FooterTitle>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <span className={classes.contact}>
                  Do you have any questions?
                  <br />
                  Contact me per Email.
                </span>
                <Box>
                  <Link
                    href="mailto:contact@mamaminia.art"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      pt: 2,
                      textDecoration: "none",
                    }}
                    className={classes.menuLink}
                  >
                    <EmailIcon sx={{ pr: 1 }} />
                    contact@mamaminia.art
                  </Link>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box
                  component="img"
                  src={Me}
                  sx={{
                    height: "200px",
                    width: "200px",
                    border: 5,
                    borderRadius: "50%",
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <RouterLink
            to={{ pathname: "/privacy" }}
            className={classes.menuLink}
          >
            Privacy Policy
          </RouterLink>
          {/* <RouterLink
            to={{ pathname: "/terms" }}
            className={classes.menuLink}
            style={{ marginLeft: "2rem" }}
          >
            Terms and conditions
          </RouterLink> */}
          <RouterLink
            to={{ pathname: "/impressum" }}
            className={classes.menuLink}
            style={{ marginLeft: "2rem" }}
          >
            Impressum
          </RouterLink>
        </Box>
        <Box sx={{ pt: 2, pb: 2 }}>
          {social.map(({ href, icon }) => (
            <FooterIcon href={href} key={href}>
              {icon}
            </FooterIcon>
          ))}
        </Box>
        Designed and created by Izabela Ograbek &copy; 2022
      </Container>
    </Grid>
  );
}

export default Footer;
