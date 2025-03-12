//Hassan Sharif Abbud Gonzalez / Student#: 301451853 / 2-4-2025

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./src/components/Home";
import About from "./src/about";
import Contact from "./src/contact";
import Project from "./src/project";
import Services from "./src/services";
import Layout from "./src/components/Layout";

const MainRouter = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
};
export default MainRouter;
