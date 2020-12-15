import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './weatherDetails.less';

interface WeatherDetailsProps {
  title: string;
  iconName: any;
  value: {
    valueOne: string;
    valueTwo?: string;
  };
}

const WeatherDetails = ({ title, iconName, value }: WeatherDetailsProps) => {
  return (
    <div className="container">
      <h4>
        <FontAwesomeIcon icon={iconName} className="icon" /> {title}
      </h4>
      <p>{`${value.valueOne} ${value.valueTwo ? value.valueTwo : ''}`}</p>
    </div>
  );
};

export default WeatherDetails;
