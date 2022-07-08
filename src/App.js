import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="Main-div">
        <Header />
        <SolarSystem />
        <Missions />
        <Footer />
      </div>
    );
  }
}

export default App;
