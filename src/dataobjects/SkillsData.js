const typeLanguage = 'Language';
const typeFramework = 'Framework';
const typeSoftware = 'Software';
const typeDatabase = 'Database';
const typeCloudAws = 'AWS';
const typeCloudAzure = 'Azure';
const typeOS = 'OS';

const skillOrderByName: string = 'name';
const skillOrderBySince: string = 'sinceyearsno';
const skillOrderByLastUsed: string = 'lastusedyearsno';
const skillOrderByArea: string = 'type';

const SkillsData: [SkillsNm.ISkillsType] = [{
        name: "VC++",
        sinceyr: 1995,
        lastused: 2009,
        type: typeLanguage
    },
    {
        name: "C#",
        sinceyr: 2003,
        type: typeLanguage
    },
    {
        name: "SQL Server",
        sinceyr: 2003,
        lastused: 2018,
        type: typeDatabase
    },
    {
        name: "DynamoDB",
        sinceyr: 2020,
        type: typeDatabase
    },
    {
        name: "Swift UI",
        sinceyr: 2021,
        type: typeLanguage
    }, {
        name: "SQL",
        sinceyr: 1995,
        lastused: 2019,
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
        iconname: "angular.png",
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
    }, {
        name: "API",
        sinceyr: 2003,
        type: typeFramework
    },
    {
        name: "IOS",
        sinceyr: 2020,
        type: typeOS
    },
    {
        name: "Windows",
        sinceyr: 1995,
        type: typeOS
    },
    {
        name: "MACOS",
        sinceyr: 2018,
        type: typeOS
    },
    {
        name: "UNIX",
        sinceyr: 2020,
        type: typeOS
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
    {
        name: "API Gateway",
        sinceyr: 2019,
        type: typeCloudAws
    },
    {
        name: "Lambda",
        sinceyr: 2019,
        type: typeCloudAws
    },
    {
        name: "S3",
        sinceyr: 2018,
        lastused: 2020,
        type: typeCloudAws
    },
    {
        name: "Cloudfront",
        sinceyr: 2019,
        type: typeCloudAws
    },
    {
        name: "Cloud Pipeline",
        sinceyr: 2020,
        type: typeCloudAws
    },
    {
        name: "Functions",
        sinceyr: 2016,
        lastused: 2018,
        type: typeCloudAzure
    },
    {
        name: "Tables",
        sinceyr: 2016,
        lastused: 2018,
        type: typeDatabase
    },
    {
        name: "JIRA",
        sinceyr: 2017,
        lastused: 2020,
        type: typeSoftware
    },
    {
        name: "Visual Studio",
        sinceyr: 1995,
        lastused: 2020,
        type: typeSoftware
    },
    {
        name: "Visual Studio Code",
        sinceyr: 1995,
        type: typeSoftware
    },
    {
        name: "XCode",
        sinceyr: 2020,
        type: typeSoftware
    },
    {
        name: "GIT",
        sinceyr: 2015,
        type: typeSoftware
    },
    {
        name: "Jenkins",
        sinceyr: 2019,
        lastused: 2018,
        type: typeSoftware
    },
    {
        name: "NodeJs",
        sinceyr: 2020,
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
    skillOrderByArea,
}