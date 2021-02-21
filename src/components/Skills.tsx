import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { SkillsData } from '../dataobjects/SkillsData';
import { TechList } from './TechList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export class Skills extends React.Component {

    render() {

        return (
            <div>
                <div className='thepheader'>Skills</div>
                <p>
                    Below find a dynamic list of my most relevant skills.

                    Clock in the heading to sort the columns.
                </p>

                <TechList skills={[...SkillsData]} />

                <Card className="text-center">
                    <Card.Header>Developer Reference</Card.Header>
                    <Card.Body className="text-left">
                        <Card.Title>Manual Table</Card.Title>
                        <Card.Text>
                            Simple implementation functional components via hook local state management.  It manually manages sorting and indicators shown in the headers.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button variant="primary" href='https://github.com/ctarmor/ResumeApp'> <FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;See Source Code</Button>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}
