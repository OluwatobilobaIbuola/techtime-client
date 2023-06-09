import React, { lazy } from "react";
import { WithSuspense } from "../components/Suspense/WithSuspense";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useCustomMode } from "../Hooks/useCustomMode";
import { NonAuthNavbar } from "../components/Navbar";
import Footer from "../components/Footer/index";
import HamburgerMenu from "../components/Navbar/HamburgerMenu";
const LandingPage = WithSuspense(lazy(() => import("../Pages/LandingPage")));

export default function Layout() {
  const mode = useCustomMode();
  const location = useLocation();
  return (
    <div className={mode === "true" ? "dark" : ""}>
      <div className={`font-Satoshi max-w-[1728px] mx-auto`}>
        <NonAuthNavbar />
        <HamburgerMenu />
        <div className={`min-h-screen text-neutralTwo`}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}
