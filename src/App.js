import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import './App.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";


import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

/* i18n messages */
import messages from './messages'; // Make sure this path is correct

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
        }, 4000)
        return () => clearTimeout(timer);
    }, [])

    return (
        <IntlProvider locale="en" messages={messages}>
            <RouterScrollTop />
            {
                loading ? (
                    <div className='loading-pag'>
                        <div className="loader">
                            <span>=(SHARAD)=></span>
                            <span>=(SHARAD)=></span>
                        </div>
                    </div>
                ) : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<Services />} />
                        
                    </Routes>
                )
            }
        </IntlProvider>
    );
}

export default App;
