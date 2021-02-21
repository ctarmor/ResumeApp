import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
//
// https://react-bootstrap.github.io/layout/grid/
//
// Awesome Fonts Icons
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
//

export function TheFooter(props: any) {

    return <div style={{ display: 'block', textAlign: 'center' }}>
        <hr/>
        <FontAwesomeIcon icon={faHome} />&nbsp;<a href='/'>Home</a>

        &nbsp;|&nbsp;
        
        <FontAwesomeIcon icon={faGithub} />&nbsp;<a href='https://github.com/ctarmor/ResumeApp' target='_new'>My GitHub ResumeApp</a>
    </div>;
}
