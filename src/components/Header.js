import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import makeStyles from '@mui/styles/makeStyles';
import useTheme from '@mui/styles/useTheme';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo/logo.svg';

const useStyles = makeStyles((theme) => ({
  menuLink: {
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 600,
    textDecoration: 'none',
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: 'underline'
    }
  },
}));

const menuItems = [
  { link: "", name: "what I do" },
  { link: "about", name: "who I am" },
  { link: "galery", name: "what I created" },
  { link: "blog", name: "what I wrote" },
]

function MobileNavbar() {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor)

  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchor(null);
  }

  return (
    <Grid container justifyContent="flex-end">
      <IconButton
        aria-label="menu"
        onClick={handleMenu}
        color="primary"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchor}
        open={open}
        onClose={handleMenuClose}
      >
        {menuItems.map(({ link, name }) => (
          <Link
            to={{ pathname: `/${link}` }}
            onClick={() => setAnchor(null)}
          >
            <MenuItem sx={{ fontSize: 16, fontWeight: 600 }}>
              {name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Grid>
  )
}

function DesktopNavbar() {
  const classes = useStyles();
  return (
    <Grid container justifyContent="flex-end">
      {menuItems.map(({ link, name }) => (
        <Grid item pl={2}>
          <Link
            to={{
              pathname: `/${link}`
            }}
            className={classes.menuLink}>
            {name}
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

function Header() {
  const theme = useTheme();
  const trigger = useScrollTrigger();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid item>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" color="default">
          <Container maxWidth="xl">
            <Grid container
              justifyContent="space-between"
              alignItems="center"
              pt={1}
            >
              <Grid item xs={1} textAlign="center">
                <Link to={{ pathname: "/" }}>
                  <Logo
                    height={48} width={48}
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
    </Grid >
  )
}

export default Header
