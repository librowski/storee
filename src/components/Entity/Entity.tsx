import * as React from 'react';
import {Grid} from "@material-ui/core";
import AvatarCard from "./AvatarCard";
import EntityPaper from "./EntityPaper";

class Entity extends React.Component {
    render() {
        const fakeCharacter = {name: 'Habudabi', description: 'Reblomeblo', connections: []};

        return (
            <Grid container={true} spacing={24} style={{height: '100%'}}>
                <Grid item={true} xs={12} sm={12} md={8} lg={6} xl={4} style={{flexDirection: 'column', display: 'flex'}}>
                    <AvatarCard character={fakeCharacter}/>
                    <EntityPaper character={fakeCharacter} title={'Description'}/>
                </Grid>
                <Grid item={true} xs={12} sm={12} md={4} lg={6} xl={8} style={{flexDirection: 'column', display: 'flex'}}>
                    <EntityPaper character={fakeCharacter} title={'Additional Data'}/>
                </Grid>
            </Grid>
        );
    }
}

export default Entity;