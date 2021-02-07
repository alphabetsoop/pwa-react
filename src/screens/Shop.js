import React from 'react';
import Box from '@material-ui/core/Box';

export class Shop extends React.Component {
    render() {
        return (
            <div style={{ width: '100%' }}>
                <Box component="div" display="inline" p={1} m={1} bgcolor="background.paper">
                    "Shop"
                </Box>
            </div>
        );
    }
}