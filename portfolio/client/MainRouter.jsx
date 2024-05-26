import React from "react";
import { Route, Routes } from 'react-router-dom';

// import components that will be used
import Home from './components/Home';
import About from './src/about';
import Contact from "./src/contact";
import Education from "./src/education";
import Project from "./src/project";
import Service from "./src/service";

import Layout from "./components/Layout";

const MainRouter = () => {
    return (<div>
        <Layout />

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/service" element={<Service />} />
        </Routes>

    </div>
    );
}

// export the element to be shown
export default MainRouter;