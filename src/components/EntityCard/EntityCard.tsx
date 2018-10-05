import * as React from 'react';
import {Grid, Paper, Typography, WithStyles, withStyles} from "@material-ui/core";
import Truncate from 'react-truncate';
import {style} from "./EntityCardStyles";

type EntityCardProps = {
    name: string;
    description: string;
}

class EntityCard extends React.PureComponent<EntityCardProps & WithStyles<typeof style>> {

    render() {
        const {classes, name, description} = this.props;
        const imageURL = new URL(`https://picsum.photos/300/300/?random?t=${this.props.name + Date.now()}`);
        const dynamicStyle = {
            background: `url(${imageURL}) no-repeat center`,
            backgroundSize: 'cover',
        };

        return (
            <Grid
                item={true}
                xs={6}
                sm={3}
                xl={2}
            >
                    <Paper
                        className={classes.paper}
                        square={true}
                        elevation={6}
                    >
                        <div className={classes.imageContainer} style={dynamicStyle}/>
                        <div className={classes.textContainer}>
                            <Typography align={'center'} variant={'title'} color={'inherit'} className={classes.nameText}>
                                {name}
                            </Typography>
                            <div className={classes.descriptionDiv}>
                                <Typography align={'center'} variant={'caption'} color={'inherit'}>
                                    <Truncate
                                        lines={8}
                                    >
                                        {description}
                                    </Truncate>
                                </Typography>
                            </div>
                        </div>
                    </Paper>
            </Grid>
        );
    }
}

export default withStyles(style)(EntityCard);