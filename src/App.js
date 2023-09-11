<<<<<<< HEAD
import './App.css';
import React, { useState, useEffect } from 'react';
import Container from './components/Container';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Transfers from './components/main-modules/transfer-money/Transfers';
import HomePage from './components/main-modules/home-page/HomePage';
import LoanMoney from './components/main-modules/loan-money/LoanMoney';
import CurrencyExchange from './components/main-modules/currency-exchange/CurrencyExchange';
import PayServices from './components/main-modules/pay-services/PayServices';
import MovementsHistory from './components/main-modules/movements-history/MovementsHistory';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
=======
import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Transfers from "./components/main-modules/transfer-money/Transfers";
import HomePage from "./components/main-modules/home-page/HomePage";
import LoanMoney from "./components/main-modules/loan-money/LoanMoney";
import CurrencyExchange from "./components/main-modules/currency-exchange/CurrencyExchange";
import PayServices from "./components/main-modules/pay-services/PayServices";
import MovementsHistory from "./components/main-modules/movements-history/MovementsHistory";
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
>>>>>>> b28daae9a935baaac759aa3da85383ac48a855b9
import MySideNav from "./components/navBar/NavBar";
import Header from "./components/header/Header";
import BalanceProvider from "./components/main-modules/BalanceProvider";
import Footer from "./components/footer/Footer";
import JsonData from "./components/data/data.json";
import "./Custom.css";

export const handleLogout = (setIsLoggedIn) => {
<<<<<<< HEAD
  setIsLoggedIn(false);
  // Limpia el estado de autenticación en localStorage al cerrar sesión
  localStorage.setItem('isLoggedIn', 'false');
=======
  localStorage.removeItem("isLoggedIn");
  setIsLoggedIn(false); // Actualiza isLoggedIn a false cuando se cierra la sesión
>>>>>>> b28daae9a935baaac759aa3da85383ac48a855b9
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Recupera el estado de autenticación desde localStorage al cargar la aplicación
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (isAuthenticated) => {
    setIsLoggedIn(isAuthenticated);
<<<<<<< HEAD
    // Almacena el estado de autenticación en localStorage
    localStorage.setItem('isLoggedIn', isAuthenticated ? 'true' : 'false');
=======
    localStorage.setItem("isLoggedIn", isAuthenticated.toString());
>>>>>>> b28daae9a935baaac759aa3da85383ac48a855b9
  };
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    } 
  }, []);

  

  return (
    <BalanceProvider>
      <Router>
        {isLoggedIn && (
          <>
            <MySideNav onLogout={handleLogout} />
            <Header />
          </>
        )}

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/loan-money" element={<LoanMoney />} />
          <Route path="/currency-exchange" element={<CurrencyExchange />} />
          <Route path="/pay-services" element={<PayServices />} />
          <Route path="/movements-history" element={<MovementsHistory />} />

          {!isLoggedIn && (
            <>
              <Route path="/" element={<Login setUser={handleLogin} />} />
              <Route path="/login" element={<Login setUser={handleLogin} />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
        </Routes>
      </Router>
      {isLoggedIn && <Footer data={landingPageData.Contact} />}
    </BalanceProvider>
  );
}

export default App;
