import React from 'react';
import { Route, Router } from 'react-router';
import { Home } from '../components/Home';
import { createBrowserHistory } from "history";
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { AnimatedSwitch } from 'react-router-transition';
import { TheFooter } from '../components/TheFooter';
import { TheNavbar } from '../components/TheNavbar';
import { Col, Container, Row } from 'react-bootstrap';
import { WebPackages } from '../components/WebPackages';

//
// https://reactrouter.com/web/example/basic
//
// Animated Switch:
// https://github.com/maisano/react-router-transition
//

const customHistory = createBrowserHistory();

export function TheRouter() {
    return <Router history={customHistory}>
        <Container fluid>
            <Row>
                <Col>
                    <TheNavbar />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper"
                    >
                        <Route exact path={'/'} component={Home} />
                        <Route path={'/home'} component={Home} />
                        <Route path={'/projects'} component={Projects} />
                        <Route path={'/skills'} component={Skills} />
                        <Route path={'/packages'} component={WebPackages} />
                        
                    </AnimatedSwitch>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TheFooter />
                </Col>
            </Row>
        </Container>
    </Router>
};


