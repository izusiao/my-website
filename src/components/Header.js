import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import makeStyles from "@mui/styles/makeStyles";
import useTheme from "@mui/styles/useTheme";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo/text.svg";

const useStyles = makeStyles((theme) => ({
  menuLink: {
    color: theme.palette.primary.main,
    fontSize: 24,
    fontWeight: 600,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
}));

const menuItems = [
  { link: "", name: "Home" },
  { link: "portfolio", name: "Portfolio" },
  { link: "journal", name: "Journal" },
  { link: "about", name: "About me" },
];

function MobileNavbar() {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchor(null);
  };

  const theme = useTheme();

  return (
    <Grid container justifyContent="flex-end">
      <IconButton
        aria-label="menu"
        onClick={handleMenu}
        // color={theme.palette.primary.main}
      >
        <MenuIcon />
      </IconButton>
      <Menu id="menu" anchorEl={anchor} open={open} onClose={handleMenuClose}>
        {menuItems.map(({ link, name }) => (
          <MenuItem
            component="a"
            href={`/${link}`}
            sx={(theme) => ({
              fontSize: 16,
              fontWeight: 600,
              color: theme ? theme.palette.primary.main : "primary",
            })}
            onClick={() => setAnchor(null)}
            key={name}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
}

function DesktopNavbar() {
  const classes = useStyles();
  return (
    <Grid container justifyContent="flex-end" spacing={6}>
      {menuItems.map(({ link, name }) => (
        <Grid item pl={2} key={name}>
          <Link
            to={{
              pathname: `/${link}`,
            }}
            className={classes.menuLink}
          >
            {name}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

function Header() {
  const theme = useTheme();
  const trigger = useScrollTrigger();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" color="default">
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              pt={1}
            >
              <Grid item xs={1} textAlign="center">
                <Link to={{ pathname: "/" }}>
                  <Logo
                    height={48}
                    width={120}
                    fill={theme.palette.primary.main}
                    stroke={theme.palette.primary.main}
                  />
                </Link>
              </Grid>
              <Grid item xs={11} sm={10}>
                <Typography variant="h6">
                  {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
                </Typography>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Container>
        </AppBar>
      </Slide>
    </Grid>
  );
}

export default Header;
