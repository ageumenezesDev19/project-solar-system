import React from 'react';
import './Missions.css';
import Title from './Title';
import MissionCard from './MissionCard';
import MissionsData from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />

        <div className="mission-container">
          {
            MissionsData.map((mission) => (
              <MissionCard
                key={ mission.name }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Missions;
