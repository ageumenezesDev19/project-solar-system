import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    const planetsWith = [
      { Mercúrio: '41px' },
      { Vênus: '102px' },
      { Terra: '106px' },
      { Marte: '66px' },
      { Júpiter: '272px' },
      { Saturno: '282.41px' },
      { Urano: '144px' },
      { Netuno: '144px' },
    ];

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />

        <div className="solar-system-container">
          { Planets.map((planet, index) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
              widthStyle={ Object.values(planetsWith[index])[0] }
            />)) }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
