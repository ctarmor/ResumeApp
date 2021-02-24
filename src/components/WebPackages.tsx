import { weblinks } from './../dataobjects/weblinks';

export function WebPackages(props: any) {
    return <div>
        <div className='thepheader'>Software References</div>
        <ul>
            {
                weblinks.map(l => <li>
                    <a href={l.link} target='_new'>{l.desc}</a>
                </li>
                )
            }
        </ul>
    </div>;
}
