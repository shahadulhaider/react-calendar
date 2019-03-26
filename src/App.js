import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Calendar from './hoc/Calendar';
import Month from './containers/Month';

const App = () => {
  return (
    <Calendar>
      <HashRouter>
        <Switch>
          <Route path="/:year/:month" component={Month} />
          <Route exact path="/" component={Month} />
        </Switch>
      </HashRouter>
    </Calendar>
  );
};

export default App;
