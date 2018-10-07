import * as React from 'react';
import {Grid} from "@material-ui/core";
import AvatarCard from "./AvatarCard";

class Entity extends React.Component {
    render() {
        return (
            <Grid container={true} spacing={24}>
                <Grid item={true} xs={12} sm={12} md={8} lg={6} xl={4}>
                    <AvatarCard character={{name: 'Habudabi', description: 'Reblomeblo', connections: []}}/>
                </Grid>
                <Grid item={true} xs={12} sm={12} md={4} lg={6} xl={8}>
                </Grid>
            </Grid>
        );
    }
}

export default Entity;