import React from 'react';
import Link from '@material-ui/core/Link';

export class Nav extends React.Component {
    render() {
        return (
            <div>
                <Link href="/">Home </Link>
                <Link href="/maps">Maps</Link>
                <Link href="/settings">Settings</Link>
                <Link href="/shop">Redeem points</Link>
            </div>
        );
    }
}