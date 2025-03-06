import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header, ExperienceCard } from "../../components";
import involvementData from "../../data/Involvement.json";
import styles from "./Involvement.module.css";

const Involvement = () => {
  return (
    <React.Fragment>
      <Header title="Involvement" />
      <Container fluid className={styles.container}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {involvementData.map((obj, index) => (
            <ExperienceCard
              key={index}
              title={obj.title}
              organization={obj.organization}
              liveUrl={obj.liveUrl}
              duration={obj.duration}
              description={obj.description}
              logo={obj.logo}
              techStack={obj.techStack}
              variant="success"
            />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Involvement;
