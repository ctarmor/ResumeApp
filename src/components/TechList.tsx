import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { skillOrderByLastUsed, skillOrderByName, skillOrderBySince } from '../dataobjects/SkillsData';


//
// Render a table for skillset
//
export function TechList(props: [SkillsNm.ISkillsType]) {

    // Set functional state hooks
    const [orderAsc] = useState(false);
    const [orderBy] = useState(skillOrderByName);
    const nowYr = new Date().getFullYear();

    // Manage dynamic sorting in manual table
    const orderSelectorNumberFn = (lf: SkillsNm.ISkillsType, rg: SkillsNm.ISkillsType) => {
        const l = lf[orderBy] ? lf[orderBy] : 0;
        const r = rg[orderBy] ? rg[orderBy] : 0;

        return orderAsc ? l - r : r - l;
    }
    const orderSelectorStringFn = (lf: SkillsNm.ISkillsType, rg: SkillsNm.ISkillsType) => {
        const l: string = orderAsc ? lf[orderBy] : rg[orderBy];
        const r: string = orderAsc ? rg[orderBy] : lf[orderBy];

        if (l < r) {
            return -1;
        } 
        if (l > r) {
            return 1;
        }
        return 0;
    }
    const orderSelectorFn = (lf: SkillsNm.ISkillsType, rg: SkillsNm.ISkillsType) => {
        const type = typeof (lf[orderBy]);
        return type === 'string' ? orderSelectorStringFn(lf, rg) : orderSelectorNumberFn(lf, rg);
    }


    // Calculate current years at rendering, and 
    const [skills] = useState(props.skills
        .map(s => {
            return {
                ...s,
                sinceyears: (nowYr - s.sinceyr).toString().padStart(2, ' '),
                lastusedyears: nowYr - s.lastused
            };
        }));


    // Finally sort
    skills.sort(orderSelectorFn);

    return <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Name</th>
                <th>Working Since</th>
                <th>Last Used</th>
            </tr>
        </thead>
        <tbody>
            {skills.map(s => row(s))} 
        </tbody>
    </Table>;
}

//
// Render a single row
//
function row(props: SkillsNm.ISkillsType) {
    return <tr>
        <td>{props.name}</td>
        <td>{props.sinceyr} ({props.sinceyears} yrs)</td>
        {
            props.lastused ? <td>{props.lastused} ({props.lastusedyears} yrs)</td> : <td />
        }
    </tr>;
}

