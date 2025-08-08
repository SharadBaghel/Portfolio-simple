import React from 'react';
import { Route, Routes } from "react-router-dom";
import { IntlProvider } from 'react-intl';

import './App.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";
import ProjectDetail from "./pages/ProjectDetails/ProjectDetail";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

/* i18n messages */
import messages from './messages'; // Make sure this path is correct

function App() {
    return (
        <IntlProvider locale="en" messages={messages}>
            <RouterScrollTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Services />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
        </IntlProvider>
    );
}

export default App;
