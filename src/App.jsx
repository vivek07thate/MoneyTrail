import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import styles from './style'; // Import your other styles
import './index.css'; // Import index.css here
import Navbar from "./components/Navbar";
import ReactDOM from 'react-dom';
import Graphs from "./components/Graphs";
import Insight from "./components/Insight";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Register from './components/Register';
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import SinglePage from './components/SinglePage';
import Login from "./components/Login"; // Import your Login component
import About from './components/About';
import Contact from './components/Contact';
import Report from './components/Report';
import LoadingPage from './components/LoadingPage'; 

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000); // Simulating a loading process of 6 seconds
  };

  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                  <div className={`${styles.boxWidth}`}>
                    <div className="App" style={{
                      '--black-gradient': 'linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)',
                      '--card-shadow': '0px 20px 100px -10px rgba(66, 71, 91, 0.1)',
                    }}>
                      <div><Navbar /></div>
                      <Routes>
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        {/* Public routes */}
                        <Route path= "/about" element= {<About />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/public" element={<PublicContent />} />
                        <Route path="/report" element= {<Report />}  />
                        {/* Private routes */}
                        <Route path="/" element={loggedIn ? <PrivateContent /> : <PublicContent />} />
                      </Routes>
                      {loading && <LoadingPage onClose={() => setLoading(false)} resultData={null} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

// Components for public content accessible without login
const PublicContent = () => (
  <>
    <SinglePage />
    <Graphs />
    <Insight />
    <Testimonials />
   
    <CTA />
    <Footer />
  </>
);

// Components for private content accessible after login
// const PrivateContent = () => (
//   <>
//     <SinglePage />
//     <Billing />
//     <CardDeal />
//     <Stats />
//     <Testimonials />
//     <CTA />
//     <Footer />
//   </>
// );

export default App;
