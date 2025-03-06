import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = (props) => {
  const backgroundStyle = {
    Projects: styles.projects,
    Experience: styles.experience,
    Involvement: styles.involvement,
    Achievements: styles.achievements,
    Education: styles.education,
  };
  return (
    <Container
      fluid
      className={`${styles.container} ${backgroundStyle[props.title]}`}
    >
      <Row>
        <h1 className={styles.headingOne}>{props.title}</h1>
      </Row>
    </Container>
  );
};

export default Header;
