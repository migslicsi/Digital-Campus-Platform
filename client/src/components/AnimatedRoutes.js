import React from 'react';
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import ClinicPage from "scenes/clinicPage";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {AnimatePresence} from "framer-motion";
import ScrollToTop from './ScrollToTop';

function AnimatedRoutes() {
    const isAuth = Boolean(useSelector((state) => state.token));
    const location = useLocation();

  return (
    <AnimatePresence>
        <ScrollToTop/>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LoginPage />} />
            <Route 
            path="/home" 
            element={isAuth ? <HomePage /> : <Navigate to="/" />} />
            <Route 
            path="/profile/:userId" 
            element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
            {/* services-information */}
            <Route
            path="/services-information-page"
            element={isAuth ? <ClinicPage /> : <Navigate to="/" />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes