import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Routers} from "./utils/constants/Routers";

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        {Routers.map(({path, component, exact}) => (
          <Route key={path} exact={exact} path={path} children={component}/>
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;