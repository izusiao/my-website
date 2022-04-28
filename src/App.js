import grey from "@mui/material/colors/grey";
import Grid from "@mui/material/Grid";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
// import SwitchThemeMode from "./components/SwitchThemeMode";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutingScrollToTop from "./components/RoutingScrollToTop";

const applyCommonTheme = (theme) =>
  createTheme(theme, {
    typography: {
      h2Big: {
        color: theme.palette.primary.dark,
        fontSize: "clamp(2rem, 8vw, 3rem)",
        fontWeight: 700,
      },
      h3Big: {
        fontWeight: 700,
      },
      spanBold: {
        color: theme.palette.text.secondary,
        fontWeight: 600,
      },
      p: {
        fontFamily: '"Cormorant", serif',
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          // fontFamily: '"Open Sans Condensed", sans-serif',
          fontFamily: '"Cormorant", serif',
        },
      },
    },
  });

const lightTheme = createTheme({
  palette: {
    primary: {
      light: "#B0C3D7",
      main: "#ad2646",
      dark: "#222230",
    },
    secondary: {
      light: "#f1ebe3",
      main: "#E7B1B7",
      dark: "#E07E87",
    },
    background: {
      light: grey[100],
      main: "#efefef",
    },
    text: {
      primary: grey[700],
      secondary: grey[50],
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#a9dfdd",
      main: "#6ccbc7",
      dark: "#00a69e",
    },
    text: {
      primary: grey[400],
      secondary: "#fff",
    },
  },
});

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: grey[50],
  },
});

function App() {
  const classes = useStyles();
  // const [themeMode, setThemeMode] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  let theme = lightTheme;
  theme = applyCommonTheme(theme);
  theme = responsiveFontSizes(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const visabilityThreshold = 100;

  // const getOffset = (element) => {
  //   const rect = element && element.getBoundingClientRect();
  //   return rect.top;
  // };

  // const listenToScroll = () => {
  //   const footerTopOffset =
  //     getOffset(document.querySelector("#footer"));

  //   if (footerTopOffset < (window.innerHeight + visabilityThreshold)) {
  //     showSidebar &&      // to limit setting state only the first time
  //       setShowSidebar(false);
  //   } else {
  //     setShowSidebar(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenToScroll);
  //   return () =>
  //     window.removeEventListener("scroll", listenToScroll);
  // }, []);

  return (
    <Router>
      <RoutingScrollToTop>
        <ThemeProvider theme={theme}>
          <Grid
            container
            direction="column"
            alignItems="flex-end"
            minHeight="100vh"
          >
            {/* <Header setThemeMode={setThemeMode} themeMode={themeMode} /> */}
            <Header />
            <Grid container flex={1}>
              <Grid item xs={12}>
                <Content />
              </Grid>
            </Grid>
            <Grid id="footer" container>
              <Footer />
            </Grid>
            {/* <SwitchThemeMode themeMode={themeMode} setThemeMode={setThemeMode} /> */}
          </Grid>
        </ThemeProvider>
      </RoutingScrollToTop>
    </Router>
  );
}

export default App;
