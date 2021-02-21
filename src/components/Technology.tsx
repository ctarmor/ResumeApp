import React from 'react';
import { SkillsData } from '../dataobjects/SkillsData';
import { TechList } from './TechList';

export class Technology extends React.Component {

    render() {

        return (
            <div>
                <div className='thepheader'>Technology</div>
                <p>List of all technolgies used</p>

                <TechList skills={[...SkillsData]} />
            </div>
        );
    }
}