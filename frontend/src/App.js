import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminDashboard, LandingPage, ContactPage, TeamPage, AboutUsPage, ServicesPage, PrivacyPage, TermsPage, PartnerPage, VolcomPage, DropsPage } from './pages';
import { AuthProvider } from "./hooks/useAuth";
import './app.scss';
import ReduxToastr from 'react-redux-toastr';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router basename='/'>
      <AuthProvider>
        <ScrollToTop>
          <Routes>
            <Route exact path="/admin/*" element={<AdminDashboard />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/about-us" element={<AboutUsPage />} />
            <Route exact path="/partner" element={<PartnerPage />} />
            <Route exact path="/volcom" element={<VolcomPage />} />
            <Route exact path="/services" element={<ServicesPage />} />
            <Route exact path="/drops" element={<DropsPage />} />
            <Route exact path="/privacy" element={<PrivacyPage />} />
            <Route exact path="/terms" element={<TermsPage />} />
            <Route exact path="/team" element={<TeamPage />} />
            <Route exact path="*" element={<LandingPage />} />
          </Routes>
        </ScrollToTop>
      </AuthProvider>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        closeOnToastrClick
      />
    </Router>
  );
}

export default App;
