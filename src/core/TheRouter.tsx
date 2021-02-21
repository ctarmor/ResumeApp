import { Route, Router, Switch } from 'react-router';
import { Home } from '../components/Home';
import { createBrowserHistory } from "history";
import { Projects } from '../components/Projects';
import { Technology } from '../components/Technology';
import { AnimatedSwitch } from 'react-router-transition';

//
// https://reactrouter.com/web/example/basic
//
// Animated Switch:
// https://github.com/maisano/react-router-transition
//

const customHistory = createBrowserHistory();

export function TheRouter(props: any) {
    return <Router history={customHistory}>
        <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
        >
            <Route exact path={'/'} component={Home} />
            <Route path={'/home'} component={Home} />
            <Route path={'/projects'} component={Projects} />
            <Route path={'/technology'} component={Technology} />
        </AnimatedSwitch>
    </Router>
};


