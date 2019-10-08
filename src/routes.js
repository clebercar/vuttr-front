import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from './pages/List';
import Create from './pages/Create';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={List} />
            <Route path="/create" component={Create} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
