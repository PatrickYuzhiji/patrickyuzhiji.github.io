import React from "react";
import {
  FaLinkedin,
  // FaYoutubeSquare,
  // FaBehanceSquare,
  FaGithubSquare,
  FaFileDownload,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import { ImageHolder, ProfileButton } from "../../components";
import { ProfessionalHeadshot, HomeBackground } from "../../assets";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Container
      fluid
      className={styles.container}
      style={{ background: `url(${HomeBackground})` }}
    >
      <Row>
        <ImageHolder
          primarySource={ProfessionalHeadshot}
          alt="Professional Headshot of Patrick Zhiji Yu"
          className={styles.professionalHeadshot}
        />
      </Row>
      <Row>
        <Col>
          <span className={`${styles.textWhite} ${styles.headingOne}`}>
            Patrick Zhiji Yu
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span className={`${styles.textWhite} ${styles.headingThree}`}>
            Software Developer experienced in AI Model Development
          </span>
          <br />
          <span className={`${styles.textWhite} ${styles.headingThree}`}>
            Full-Stack Web and Mobile development
          </span>
          <br />
          <span className={`${styles.textWhite} ${styles.headingThree}`}>
            EIS Mentor | Resident Ambassador
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="https://www.linkedin.com/in/patrick-zhiji-yu"
            target="_blank_"
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </Col>
        <Col>
          <a href="https://github.com/PatrickYuzhiji" target="_blank_">
            <FaGithubSquare className={styles.icon} />
          </a>
        </Col>
        {/* <Col>
          <a href="https://www.behance.net/AVS1508" target="_blank_">
            <FaBehanceSquare className={styles.icon} />
          </a>
        </Col> */}
        {/* <Col>
          <a
            href="https://www.youtube.com/channel/UCOrl4Ba4pJBDUHzDvX4GFiQ"
            target="_blank_"
          >
            <FaYoutubeSquare className={styles.icon} />
          </a>
        </Col> */}
      </Row>
      <Row>
        <Col>
          <ProfileButton
            logo={<MdEmail className={styles.iconSmall} />}
            href="mailto:hi@patrickyu.work"
          >
            hi@patrickyu.work
          </ProfileButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProfileButton
            logo={<FaFileDownload className={styles.iconSmall} />}
            href="./resume.html"
          >
            Résumé
          </ProfileButton>
        </Col>
      </Row>
      {/* <Row style={{ justifyContent: "center", alignItems: "center" }}>
        <ProfileCard
          logo={CICSLogo}
          logoAlt="University of Massachusetts Amherst"
        >
          {" "}
          Undergraduate Course Assistant at Manning CICS{" "}
        </ProfileCard>
        <ProfileCard logo={HackUMassLogo} logoAlt="HackUMass">
          {" "}
          Tech + Design Member at HackUMass Organizing Team{" "}
        </ProfileCard>
        <ProfileCard logo={HackUMassLogo} logoAlt="HackUMass">
          {" "}
          Software Developer at HackUMass Organizing Team{" "}
        </ProfileCard>
      </Row> */}
    </Container>
  );
};

export default Home;
