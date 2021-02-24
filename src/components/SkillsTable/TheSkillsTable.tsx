import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { skillOrderByArea, skillOrderByLastUsed, skillOrderByName, skillOrderBySince } from '../../dataobjects/SkillsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { orderSelectorFn } from './OrderBySelectors';

//
// Render a manually manage table for its props skillset collection
//
export function TheSkillsTable(props: [SkillsNm.ISkillsType]) {

    // Set functional state hooks
    const [op, setOp] = useState({ orderBy: skillOrderByName, orderAsc: true });
    const nowYr = new Date().getFullYear();

    // Calculate current years at rendering, and 
    const [skills] = useState(props.skills
        .map(s => {
            const lstyr = s.lastused ? (nowYr - s.lastused) : 0;
            const yrs = s.lastused ? s.lastused - s.sinceyr : nowYr - s.sinceyr;
            return {
                ...s,
                sinceyearsno: yrs,
                lastusedyearsno: lstyr,
                sinceyears: (yrs < 1 ? 1 : yrs).toString().padStart(2, ' ').concat(' ', (yrs > 1 ? 'yrs' : 'yr')),
                lastusedyears: (lstyr < 1 ? 1 : lstyr).toString().padStart(2, ' ').concat(' ', (lstyr > 1 ? 'yrs ago' : 'yr ago')),
            };
        }));


    // Finally sort
    skills.sort((l: SkillsNm.ISkillsType,r: SkillsNm.ISkillsType) => orderSelectorFn(op, l, r));

    // Re-sort by chaging local state
    const onSort = (orderBy: string) => {
        setOp({ orderBy: orderBy, orderAsc: !op.orderAsc });
    }

    // Render headaer based on sort criteria
    const buildTh = (skillOrderBy: string, colname: string) => {
        return <div>
            <Link onClick={() => onSort(skillOrderBy)}>{colname}</Link>&nbsp;
            {
                op.orderBy === skillOrderBy ? op.orderAsc ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} /> : undefined
            }

        </div>;
    }

    //
    // Render
    //
    return <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>{buildTh(skillOrderByName, 'Name')}</th>
                <th>{buildTh(skillOrderByArea, 'Area')}</th>
                <th>{buildTh(skillOrderBySince, 'Experience')}</th>
                <th>{buildTh(skillOrderByLastUsed, 'Last Used')}</th>
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
        <td>{props.type}</td>
        <td><div style={{ display: 'flex' }}><div>{props.sinceyears}</div>&nbsp;<div style={{ color: 'gray' }}>{props.sinceyr}</div></div></td>
        {
            props.lastused ? <td><div style={{ color: 'gray' }}>{props.lastused} - {props.lastusedyears}</div></td> : <td>current</td>
        }
    </tr>;
}



