import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { skillOrderByArea, skillOrderByLastUsed, skillOrderByName, skillOrderBySince } from '../dataobjects/SkillsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

//
// Render a manually manage table for its props skillset collection
//
export function TechList(props: [SkillsNm.ISkillsType]) {

    // Set functional state hooks
    const [op, setOp] = useState({ orderBy: skillOrderByName, orderAsc: true });
    const nowYr = new Date().getFullYear();

    // Manage dynamic sorting in manual table
    const orderSelectorNumberFn = (lf: SkillsNm.ISkillsType, rg: SkillsNm.ISkillsType) => {
        const l = lf[op.orderBy] ? lf[op.orderBy] : 0;
        const r = rg[op.orderBy] ? rg[op.orderBy] : 0;

        return op.orderAsc ? l - r : r - l;
    }
    const orderSelectorStringFn = (lf: SkillsNm.ISkillsType, rg: SkillsNm.ISkillsType) => {
        const l: string = op.orderAsc ? lf[op.orderBy] : rg[op.orderBy];
        const r: string = op.orderAsc ? rg[op.orderBy] : lf[op.orderBy];

        if (l < r) {
            return -1;
        } 
        if (l > r) {
            return 1;
        }
        return 0;
    }
    const orderSelectorFn = (lf: SkillsNm.ISkillsType, rg: SkillsNm.ISkillsType) => {
        const type = typeof (lf[op.orderBy]);
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


    // Re-sort
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
                <th>{buildTh(skillOrderBySince, 'Working Since')}</th>
                <th>{buildTh(skillOrderByLastUsed, 'Last Used')}</th>
                <th>{buildTh(skillOrderByArea, 'Area')}</th>
            </tr>
        </thead>
        <tbody>
            {skills.map(s => row(s))} 
        </tbody>
    </Table>;
}

//
//


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
        <td>{props.type}</td>
    </tr>;
}

