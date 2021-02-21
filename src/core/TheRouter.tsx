import React from 'react';
import { Route, Router } from 'react-router';
import { Home } from '../components/Home';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

export class TheRouter extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Router history={customHistory}>
                <Route path={'/'} component={Home} />
            </Router>
        );
    }
}