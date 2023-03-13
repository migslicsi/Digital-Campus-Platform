import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import ClinicPage from "scenes/clinicPage";
import InformationPage from "scenes/informationPage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route 
            path="/home" 
            element={isAuth ? <HomePage /> : <Navigate to="/" />} />
            <Route 
            path="/profile/:userId" 
            element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
            
            {/* services */}
            <Route
            path="/services-information-page"
            element={isAuth ? <ClinicPage /> : <Navigate to="/" />} />
            
            {/* information */}
            <Route
            path="/information"
            element={isAuth ? <InformationPage /> : <Navigate to="/" />} />
          
            
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
