import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header, InvolvementCard } from "../../components";
import InvolvementData from "../../data/Involvement.json";
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
          {InvolvementData.map((obj, index) => (
            <InvolvementCard
              key={index}
              title={obj.title}
              organization={obj.organization}
              liveUrl={obj.liveUrl}
              duration={obj.duration}
              description={obj.description}
              logo={obj.logo}
              techStack={obj.techStack}
              variant="danger"
            />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Involvement;
