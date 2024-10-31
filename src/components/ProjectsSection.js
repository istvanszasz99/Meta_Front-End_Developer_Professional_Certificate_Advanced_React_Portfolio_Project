import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Portfolio",
    description:
      "Personal portfolio website that contains all of my work, project and skill experiences and my resume.",
    getImageSrc: () => require("../images/pic_portfolio_v2.png"),
    url: "https://github.com/istvanszasz99/portfolio_v2",
  },
  {
    title: "Portfolio (old version)",
    description:
      "Personal portfolio website that contains all of my work, project and skill experiences and my resume.",
    getImageSrc: () => require("../images/pic_portfolio_v1.png"),
    url: "https://github.com/istvanszasz99/portfolio",
  },
  {
    title: "Pizza Time Webstore",
    description:
      "Fictional Pizza Restaurant Webstore that created for practice and expanding my portfolio.",
    getImageSrc: () => require("../images/pic_pizzatime.png"),
    url: "https://github.com/istvanszasz99/WebstoreProject",
  },
  {
    title: "3D survival game",
    description:
      "3D survival game made in Unreal Engine 4 for Obuda University project work.",
    getImageSrc: () => require("../images/pic_3Dgame.png"),
    url: "https://github.com/istvanszasz99/ObudaUniverityProjectWorkUE4",
  },
  {
    title: "Obuda University Thesis",
    description:
      "Educational simulation of the university campus in a 3D environment using Unreal Engine 5.",
    getImageSrc: () => require("../images/pic_university.png"),
    url: "https://github.com/istvanszasz99/ObudaUniverityThesis",
  },
  {
  title: "Meta Front-End Developer Professional Certificate - HTML and CSS in depth | Portfolio-Project",
  description:
    "Portfolio Project from Meta Front-End Developer course.",
  getImageSrc: () => require("../images/pic_meta_html_css.png"),
  url: "https://github.com/istvanszasz99/Meta_Front-End_Developer_Professional_Certificate_HTML_and_CSS_in_depth_Portfolio_Project",
  }
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
