import React from 'react';
import { SkillsData } from '../dataobjects/SkillsData';
import { DeveloperCard } from './DeveloperCard';
import { TheSkillsTable } from './SkillsTable/TheSkillsTable';


export class Skills extends React.Component {

    render() {

        return (
            <div>
                <div className='thepheader'>Skills</div>
                <p>
                    Below find a dynamic list of my most relevant skills.

                    Click the heading to sort.
                </p>

                <TheSkillsTable skills={[...SkillsData]} />

                <DeveloperCard
                    title='Manual Table &amp; Local State Hook'
                    text='Simple implementation of functional components via "hooks" local state management. It manually manages sorting and indicators shown in the headers.'
                    link='https://github.com/ctarmor/ResumeApp/blob/main/src/components/SkillsTable/TheSkillsTable.tsx'
                />
            </div>
        );
    }
}
