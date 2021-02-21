import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { Home } from '../components/Home';
import { createBrowserHistory } from "history";
import { Projects } from '../components/Projects';
import { Technology } from '../components/Technology';

//
// https://reactrouter.com/web/example/basic
//


const customHistory = createBrowserHistory();

export class TheRouter extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Router history={customHistory}>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/home'} component={Home} />
                    <Route path={'/projects'} component={Projects} />
                    <Route path={'/technology'} component={Technology} />
                </Switch>
            </Router>
        );
    }
}