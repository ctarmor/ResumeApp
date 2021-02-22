import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { SkillsData } from '../dataobjects/SkillsData';
import { TechList } from './TechList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DeveloperCard } from './DeveloperCard';
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

                <DeveloperCard
                    title='Manual Table &amp; Local State Hook'
                    text='Simple implementation of functional components via "hook" local state management. It manually manages sorting and indicators shown in the headers.'
                    link='https://github.com/ctarmor/ResumeApp/blob/main/src/components/Skills.tsx'
                />
            </div>
        );
    }
}
