/* eslint-disable react/prop-types */
import React from 'react';

import './index.scss';

const HeaderWeekdays = props => {
  return (
    <header className="weekdays">
      {
        props.days.map((weekday, i) => (
          <strong key={i}>{weekday}</strong>
        ))
      }
    </header>
  );
};

export default HeaderWeekdays;
