const typeLanguage = 'Language';
const typeFramework = 'Framework';
const typeSoftware = 'Software';
const typeDatabase = 'Database';

const skillOrderByName: string = 'name';
const skillOrderBySince: string = 'sinceyr';
const skillOrderByLastUsed : string = 'lastused';

const SkillsData: [SkillsNm.ISkillsType] = [{
        name: "VC++",
        sinceyr: 1990,
        lastused: 2009,
        type: typeLanguage
    },
    {
        name: "C#",
        sinceyr: 2003,
        lastused: 2009,
        type: typeLanguage
    },
    {
        name: "JavaScript",
        sinceyr: 2010,
        type: typeLanguage
    },
    {
        name: "HTML",
        sinceyr: 1999,
        type: typeLanguage
    },
    {
        name: "React",
        sinceyr: 2017,
        type: typeFramework
    },
    {
        name: "Angular",
        sinceyr: 2021,
        type: typeFramework
    },
    {
        name: "WPF",
        sinceyr: 2009,
        type: typeFramework
    },
    {
        name: "ASP Classic",
        sinceyr: 2001,
        lastused: 2008,
        type: typeFramework
    },
    {
        name: "ASP.NET",
        sinceyr: 2004,
        lastused: 2016,
        type: typeFramework
    },
    {
        name: ".NET",
        sinceyr: 2004,
        type: typeFramework
    },
    {
        name: "Web",
        sinceyr: 2004,
        type: typeFramework
    },

];

module.exports = {
    SkillsData,
    typeLanguage,
    typeFramework,
    typeSoftware,
    typeDatabase,
    skillOrderBySince,
    skillOrderByLastUsed,
    skillOrderByName,
}

