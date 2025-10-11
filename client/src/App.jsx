import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Policy from "./pages/Policy.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import MainPage from "./pages/mainPage.jsx";
import SportsPage from "./pages/SportsPage.jsx";
import FashionPage from "./pages/FashionPage.jsx";
import BusinessPage from "./pages/BusinessPage.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import ShareMarketPage from "./pages/ShareMarketPage.jsx";
import TechPage from "./pages/TechPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import FounderPage from "./pages/FounderPage.jsx";
import SubscribePage from "./pages/subscribePage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main/:type/:id" element={<MainPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/fashion" element={<FashionPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/sharemarket" element={<ShareMarketPage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/founder-bio" element={<FounderPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
