import React, { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/navbar';
import Home from './components/pages/home';
import About from './components/pages/About';
import Skills from './components/pages/skills';
import Projects from './components/pages/Project';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) return <Loader setLoading={setLoading} />;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
