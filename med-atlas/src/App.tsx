import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Diagnostics from './components/Diagnostics';
import Articles from './components/Articles';
import AIChat from './components/AIChat';
import FindHospital from './components/FindHospital';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Diagnostics />
        <Articles />
        <AIChat />
        <FindHospital />
      </main>
      <Footer />
    </div>
  );
}

export default App;