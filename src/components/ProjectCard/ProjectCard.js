import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { ImageHolder } from "..";
import * as Asset from "../../assets";
import { TbBrandReactNative } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import {
  SiNestjs,
  SiMysql,
  SiFlutter,
  SiBootstrap,
  SiReact,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiFlask,
  SiNumpy,
  SiPython,
  SiPytorch,
  SiExpo,
  SiOnnx,
  SiVite,
  SiFastapi,
  SiPostman,
  SiJavascript,
  SiJquery,
  SiDocker,
  SiSqlalchemy,
  SiServerless,
  SiAxios,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSanity,
  SiResend,
  SiVercel,
  SiPostgresql,
  SiScrapy,
  SiPhp,
} from "react-icons/si";
import styles from "./ProjectCard.module.css";

const icons = {
  Bootstrap: (
    <SiBootstrap className={styles.icon} style={{ color: "#7952B3" }} />
  ),
  CSS: <SiCss3 className={styles.icon} style={{ color: "#1572B6" }} />,
  Firebase: <SiFirebase className={styles.icon} style={{ color: "#FFCA28" }} />,
  Flask: <SiFlask className={styles.icon} style={{ color: "#000000" }} />,
  Flutter: <SiFlutter className={styles.icon} style={{ color: "#02569B" }} />,
  HTML: <SiHtml5 className={styles.icon} style={{ color: "#E34F26" }} />,
  MySQL: <SiMysql className={styles.icon} style={{ color: "#4479A1" }} />,
  NestJS: <SiNestjs className={styles.icon} style={{ color: "#E0234E" }} />,
  NumPy: <SiNumpy className={styles.icon} style={{ color: "#013243" }} />,
  Python: <SiPython className={styles.icon} style={{ color: "#3776AB" }} />,
  PyTorch: <SiPytorch className={styles.icon} style={{ color: "#EE4C2C" }} />,
  React: <SiReact className={styles.icon} style={{ color: "#61DAFB" }} />,
  ReactNative: (
    <TbBrandReactNative className={styles.icon} style={{ color: "#61DAFB" }} />
  ),
  Expo: <SiExpo className={styles.icon} style={{ color: "#000020" }} />,
  ONNX: <SiOnnx className={styles.icon} style={{ color: "#FBCE00" }} />,
  Vite: <SiVite className={styles.icon} style={{ color: "#646CFF" }} />,
  FastAPI: <SiFastapi className={styles.icon} style={{ color: "#009688" }} />,
  Postman: <SiPostman className={styles.icon} style={{ color: "#FF6C37" }} />,
  JavaScript: (
    <SiJavascript className={styles.icon} style={{ color: "#F7DF1E" }} />
  ),
  jQuery: <SiJquery className={styles.icon} style={{ color: "#0769AD" }} />,
  Docker: <SiDocker className={styles.icon} style={{ color: "#2496ED" }} />,
  SQLAlchemy: (
    <SiSqlalchemy className={styles.icon} style={{ color: "#FCA121" }} />
  ),
  Serverless: (
    <SiServerless className={styles.icon} style={{ color: "#FD5750" }} />
  ),
  Axios: <SiAxios className={styles.icon} style={{ color: "#0076BE" }} />,
  AWS: <FaAws className={styles.icon} style={{ color: "#FF9900" }} />,
  NextJS: <SiNextdotjs className={styles.icon} style={{ color: "#61DAFB" }} />,
  TypeScript: (
    <SiTypescript className={styles.icon} style={{ color: "#007ACC" }} />
  ),
  TailwindCSS: (
    <SiTailwindcss className={styles.icon} style={{ color: "#38BDF8" }} />
  ),
  SanityCMS: <SiSanity className={styles.icon} style={{ color: "#222222" }} />,
  Resend: <SiResend className={styles.icon} style={{ color: "#0769AD" }} />,
  Vercel: <SiVercel className={styles.icon} style={{ color: "#FCA121" }} />,
  PostgreSQL: (
    <SiPostgresql className={styles.icon} style={{ color: "#336791" }} />
  ),
  Scrapy: <SiScrapy className={styles.icon} style={{ color: "#0076BE" }} />,
  PHP: <SiPhp className={styles.icon} style={{ color: "#777BB4" }} />,
};

const ProjectCard = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const handleModalOpen = () => setModalDisplay(true);
  const handleModalClose = () => setModalDisplay(false);

  return (
    <Card className={styles.container}>
      <ImageHolder
        primarySource={Asset[props.logo]}
        alt="Please update your browser to view this image"
        className={`card-img ${styles.image}`}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.techStack.map((tech, index) => icons[tech])}
        </Card.Text>
        <Card.Text>{props.content}</Card.Text>
        {props.liveUrl ? (
          <Button
            className={styles.button}
            variant="primary"
            href={props.liveUrl}
            target="_blank"
          >
            View Live
          </Button>
        ) : null}

        {props.gitHubUrl ? (
          <Button
            className={styles.button}
            variant="dark"
            href={props.gitHubUrl}
            target="_blank"
          >
            View on GitHub
          </Button>
        ) : null}

        {props.description ? (
          <React.Fragment>
            <Button
              className={styles.button}
              variant="secondary"
              onClick={handleModalOpen}
            >
              View Description
            </Button>
            <Modal
              centered
              size="lg"
              show={modalDisplay}
              onHide={handleModalClose}
            >
              <Modal.Header closeButton>
                <Modal.Title style={{ textAlign: "center", width: "100%" }}>
                  {props.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{ textAlign: "start" }}>
                  <h4>{props.content}</h4>
                </div>
                <h5>Description:</h5>
                <ul>
                  {props.description.map((elem) => (
                    <li>{elem}</li>
                  ))}
                </ul>
              </Modal.Body>
            </Modal>
          </React.Fragment>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
