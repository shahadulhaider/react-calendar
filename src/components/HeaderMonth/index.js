/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const HeaderMonth = props => {
  return (
    <header className="month-header">
      <div className="row">
        <Link to={'/' + props.prevMonth.slug}>
          <i className="fas fa-chevron-circle-left" />
        </Link>
      </div>
      <div className="row">
        <h1>{props.curMonth.name}</h1>
      </div>
      <div className="row">
        <Link to={'/' + props.nextMonth.slug}>
          <i className="fas fa-chevron-circle-right" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderMonth;
