import React, { useState, useMemo } from "react";
import { Container, Row } from "react-bootstrap";
import { HeaderProjects, ProjectCard } from "../../components";
import webProjectsData from "../../data/Projects_web.json";
import mobileProjectsData from "../../data/Projects_mobile.json";
import aiProjectsData from "../../data/Projects_AI.json";
import miscProjectsData from "../../data/Projects_miscellaneous.json";
import styles from "./Projects.module.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");

  const projectsData = useMemo(() => {
    switch (activeTab) {
      case "web":
        return webProjectsData;
      case "mobile":
        return mobileProjectsData;
      case "ai":
        return aiProjectsData;
      case "miscellaneous":
        return miscProjectsData;
      default:
        return webProjectsData;
    }
  }, [activeTab]);

  return (
    <React.Fragment>
      <HeaderProjects activeTab={activeTab} setActiveTab={setActiveTab} />
      <Container fluid className={styles.container}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {projectsData.map((obj, index) => (
            <ProjectCard
              key={`${activeTab}-${index}`}
              title={obj.title}
              content={obj.content}
              gitHubUrl={obj.gitHubUrl}
              liveUrl={obj.liveUrl}
              techStack={obj.techStack}
              description={obj.description}
              logo={obj.logo}
            />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Projects;
