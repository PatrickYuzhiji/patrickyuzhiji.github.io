import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { ImageHolder } from "..";
import * as Asset from "../../assets";
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
  SiKotlin,
  SiJetpackcompose,
  SiTensorflow,
  SiDart,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNginx,
  SiAmazonaws,
  SiAngular,
  SiIonic,
  SiGoogleplay,
  SiAppstore,
  SiJavascript,
  SiGit,
  SiRuby,
  SiRubyonrails,
  SiHeroku,
  SiD3Dotjs,
  SiDjango,
  SiTailwindcss,
  SiNetlify,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiBlender,
} from "react-icons/si";
import styles from "./EducationCard.module.css";

const icons = {
  AdobeIllustrator: (
    <SiAdobeillustrator className={styles.icon} style={{ color: "#FF9A00" }} />
  ),
  AdobeIndesign: (
    <SiAdobeindesign className={styles.icon} style={{ color: "#FF3366" }} />
  ),
  AdobePhotoshop: (
    <SiAdobephotoshop className={styles.icon} style={{ color: "#31A8FF" }} />
  ),
  AppleAppStore: (
    <SiAppstore className={styles.icon} style={{ color: "#0D96F6" }} />
  ),
  Angular: <SiAngular className={styles.icon} style={{ color: "#0F0F11" }} />,
  AWS: <SiAmazonaws className={styles.icon} style={{ color: "#232F3E" }} />,
  Blender: <SiBlender className={styles.icon} style={{ color: "#F5792A" }} />,
  Bootstrap: (
    <SiBootstrap className={styles.icon} style={{ color: "#7952B3" }} />
  ),
  CSS: <SiCss3 className={styles.icon} style={{ color: "#1572B6" }} />,
  D3dotjs: <SiD3Dotjs className={styles.icon} style={{ color: "#F9A03C" }} />,
  Dart: <SiDart className={styles.icon} style={{ color: "#0175C2" }} />,
  Django: <SiDjango className={styles.icon} style={{ color: "#092E20" }} />,
  Express: <SiExpress className={styles.icon} style={{ color: "#000000" }} />,
  Firebase: <SiFirebase className={styles.icon} style={{ color: "#FFCA28" }} />,
  Flask: <SiFlask className={styles.icon} style={{ color: "#000000" }} />,
  Flutter: <SiFlutter className={styles.icon} style={{ color: "#02569B" }} />,
  Git: <SiGit className={styles.icon} style={{ color: "#F05032" }} />,
  GooglePlay: (
    <SiGoogleplay className={styles.icon} style={{ color: "#414141" }} />
  ),
  Heroku: <SiHeroku className={styles.icon} style={{ color: "#430098" }} />,
  HTML: <SiHtml5 className={styles.icon} style={{ color: "#E34F26" }} />,
  Ionic: <SiIonic className={styles.icon} style={{ color: "#3880FF" }} />,
  JavaScript: (
    <SiJavascript className={styles.icon} style={{ color: "#F7DF1E" }} />
  ),
  JetpackCompose: (
    <SiJetpackcompose className={styles.icon} style={{ color: "#4285F4" }} />
  ),
  Kotlin: <SiKotlin className={styles.icon} style={{ color: "#7F52FF" }} />,
  Tensorflow: (
    <SiTensorflow className={styles.icon} style={{ color: "#FF6F00" }} />
  ),
  MongoDB: <SiMongodb className={styles.icon} style={{ color: "#47A248" }} />,
  MySQL: <SiMysql className={styles.icon} style={{ color: "#4479A1" }} />,
  NestJS: <SiNestjs className={styles.icon} style={{ color: "#E0234E" }} />,
  Netlify: <SiNetlify className={styles.icon} style={{ color: "#00C7B7" }} />,
  Nginx: <SiNginx className={styles.icon} style={{ color: "#009639" }} />,
  Nodedotjs: (
    <SiNodedotjs className={styles.icon} style={{ color: "#339933" }} />
  ),
  NumPy: <SiNumpy className={styles.icon} style={{ color: "#013243" }} />,
  Python: <SiPython className={styles.icon} style={{ color: "#3776AB" }} />,
  PyTorch: <SiPytorch className={styles.icon} style={{ color: "#EE4C2C" }} />,
  React: <SiReact className={styles.icon} style={{ color: "#61DAFB" }} />,
  Ruby: <SiRuby className={styles.icon} style={{ color: "#CC342D" }} />,
  RubyOnRails: (
    <SiRubyonrails className={styles.icon} style={{ color: "#D30001" }} />
  ),
  TailwindCSS: (
    <SiTailwindcss className={styles.icon} style={{ color: "#38B2AC" }} />
  ),
};

const EducationCard = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalOpen = () => setModalDisplay(true);
  const handleModalClose = () => setModalDisplay(false);
  const logoValue = props.logo;

  return (
    <Card className={styles.container}>
      <ImageHolder
        primarySource={Asset[logoValue]}
        alt="Please update your browser to view this image"
        className={`card-img ${styles.image}`}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.organization}
          <br />
          <span style={{ fontWeight: "500" }}>{props.duration}</span>
        </Card.Text>
        <Card.Text>
          {props.techStack?.map((tech, index) => icons[tech])}
        </Card.Text>
        {props.liveUrl ? (
          <Button
            className={styles.button}
            variant={props.variant}
            href={props.liveUrl}
            target="_blank"
          >
            Visit Website
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
                <Modal.Title>{props.organization}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{ textAlign: "center" }}>
                  <h4>{props.title}</h4>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h5>{props.duration}</h5>
                </div>
                <div style={{ textAlign: "center", padding: "1em" }}>
                  {props.techStack?.map((tech, index) => icons[tech])}
                </div>
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

export default EducationCard;
