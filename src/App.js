import React, { useState, Suspense, lazy } from "react";
import { NavigationBar } from "./components";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
// const Experience = lazy(() => import("./pages/Experience/Experience"));
const Education = lazy(() => import("./pages/Education/Education"));
const Involvement = lazy(() => import("./pages/Involvement/Involvement"));

// const Achievements = lazy(() => import("./pages/Achievements/Achievements"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  const [currentTab, setCurrentTab] = useState("home");

  const renderSwitch = (param) => {
    switch (param) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "education":
        return <Education />;
      // case "experience ":
      //   return <Experience />;
      case "involvement":
        return <Involvement />;
      // case "achievements":
      //   return <Achievements />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="App">
      <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Suspense fallback={Loader()}>{renderSwitch(currentTab)}</Suspense>
    </div>
  );
};

export default App;
