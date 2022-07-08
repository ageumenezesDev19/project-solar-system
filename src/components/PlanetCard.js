import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, widthStyle } = this.props;

    return (
      <div data-testid="planet-card" className="planets-cards-container">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          style={ { width: widthStyle } }
        />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  widthStyle: PropTypes.string.isRequired,
};

export default PlanetCard;
