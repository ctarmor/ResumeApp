import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export function DeveloperCard(props: any) {
    return <Card className="text-center">
            <Card.Header as='h5'>Developer Reference</Card.Header>
            <Card.Body className="text-left">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button variant="primary"
                    target='_new'
                    href={props.link}>
                    <FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;See Source Code
                </Button>
            </Card.Footer>
        </Card>
    ;
}
