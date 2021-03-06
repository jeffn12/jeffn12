import React from "react";
// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import SplashPage from "./components/SplashPage";
import AboutMe from "./components/AboutMe";
import ProjectPage from "./components/ProjectPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import ContactMeFab from "./components/ContactMeFab";
// Material UI
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function App() {
  const Styles = useStyles();

  return (
    <Router>
      <Box className={Styles.root}>
        <Background />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <SplashPage />
            <AboutMe />
            <ProjectPage />
            <SkillsPage />
            <ContactMeFab />
          </Route>
          <Route path="/about">
            <AboutMe />
            <ContactMeFab />
          </Route>
          <Route path="/projects">
            <ProjectPage />
            <ContactMeFab />
          </Route>
          <Route path="/skills">
            <SkillsPage />
            <ContactMeFab />
          </Route>
          <Route path="/contact" />
        </Switch>
        <ContactPage />
        <Footer />
      </Box>
    </Router>
  );
}

export default App;

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0rem 1rem"
  }
});
