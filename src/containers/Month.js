import React, { Component } from 'react';
import moment from 'moment';

import HeaderMonth from '../components/HeaderMonth';
import HeaderWeekdays from '../components/HeaderWeekdays';
import Day from '../components/Day';

import './index.scss';

class Month extends Component {
  state = {
    curMonth: {},
    nextMonth: {},
    prevMonth: {}
  };

  componentDidMount() {
    this.createState(this.props);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    this.createState(nextProps, true);
  }

  createState(props) {
    const curMonth = props.match.params.year && props.match.params.month
      ? `${props.match.params.year}-${props.match.params.month}`
      : moment().format('YYYY-MM');

    const nextMonth = moment(curMonth).add(1, 'M').format('YYYY-MM');
    const prevMonth = moment(curMonth).subtract(1, 'M').format('YYYY-MM');

    this.setState({
      curMonth: {
        date: curMonth,
        name: moment(curMonth).format('MMMM YYYY'),
        days: moment(curMonth).daysInMonth(),
        editDay: null
      },
      nextMonth: {
        date: nextMonth,
        slug: nextMonth.replace('-', '/')
      },
      prevMonth: {
        date: prevMonth,
        slug: prevMonth.replace('-', '/')
      },
    });
  }

  handleSetEditDay = day => {
    this.setState({
      ...this.state.curMonth,
      editDay: day
    });
  };

  buildDays() {
    const days = [];
    const props = {
      editDay: this.state.curMonth.editDay,
      handleSetEditDay: this.handleSetEditDay
    };

    for (let i = 1; i <= this.state.curMonth.days; i++) {
      let date = `${this.state.curMonth.date}-${('0' + i).slice(-2)}`;
      props['date'] = date;
      props['day'] = i;

      if (i === 1) {
        props['firstDayIndex'] = moment(date).startOf('month').format('d');
      } else {
        delete props['firstDayIndex'];
      }

      days.push(<Day key={i} {...props} />);
    }

    return days;
  }

  render() {
    const weekdays = moment.weekdays();
    const days = this.buildDays();

    return (
      <div className="month">
        <HeaderMonth
          curMonth={this.state.curMonth}
          nextMonth={this.state.nextMonth}
          prevMonth={this.state.prevMonth}
        />
        <HeaderWeekdays days={weekdays} />
        <section className="days">{days}</section>
      </div>
    );
  }
}

export default Month;