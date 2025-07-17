import React from "react";
import { Container, Row, Nav } from "react-bootstrap";
import styles from "./HeaderProjects.module.css";

const HeaderProjects = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: "web", label: "Web Development" },
    { key: "mobile", label: "Mobile & Cross-platform" },
    { key: "ai", label: "AI & Data Science" },
    { key: "miscellaneous", label: "Miscellaneous Projects" },
  ];

  return (
    <Container fluid className={styles.container}>
      <Row>
        <h1 className={styles.headingOne}>Projects</h1>
      </Row>
      <Row>
        <Nav
          variant="pills"
          className={styles.navTabs}
          activeKey={activeTab}
          onSelect={(selectedKey) => setActiveTab(selectedKey)}
        >
          {tabs.map((tab) => (
            <Nav.Item key={tab.key}>
              <Nav.Link
                eventKey={tab.key}
                className={
                  activeTab === tab.key ? styles.activeTab : styles.inactiveTab
                }
              >
                {tab.label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Row>
    </Container>
  );
};

export default HeaderProjects;
