import React from "react";
// Components
import Project from "./Project";
// Material UI
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
// Helpers
import { PROJECT_LIST } from "../utils/project_list";
import SectionHeader from "./SectionHeader";

function ProjectPage() {
  const Styles = useStyles();

  return (
    <>
      <SectionHeader title="My Projects" />
      <Box className={Styles.root}>
        {PROJECT_LIST.map((project) => (
          <Box className={Styles.project} key={project.title}>
            <img
              alt=""
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: `url(${project.icon})`,
                backgroundSize: "cover",
                opacity: 0.1,
                borderRadius: "10px"
              }}
            />
            <Project project={project} />
          </Box>
        ))}
      </Box>
    </>
  );
}

export default ProjectPage;

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "10rem"
  },
  project: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: 0,
    left: 0,
    width: "23.5rem",
    height: "22rem",
    margin: "1rem"
  }
});
