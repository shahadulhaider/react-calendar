/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        {this.props.children}
      </div>
    );
  }
}

export default Calendar;
