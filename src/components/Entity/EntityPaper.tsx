import * as React from 'react';
import {Character} from "../../store/Character/types";
import {Paper, Typography, withStyles, WithStyles} from "@material-ui/core";
import {EntityPaperStyles} from "./EntityPaperStyles";

interface EntityPaperProps {
    character: Character;
    title: string;
}

class AvatarCard extends React.Component<EntityPaperProps & WithStyles<typeof EntityPaperStyles>> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.mainWrapper}>
                <div className={classes.paperHeader}>
                    <div className={classes.paperTopLine}/>
                    <div className={classes.paperTopCircle}/>
                    <Typography className={classes.paperTitle} variant={"caption"} color={"primary"}>
                        {this.props.title.toUpperCase()}
                    </Typography>
                    <div className={classes.paperTopCircle}/>
                    <div className={classes.paperTopLine}/>
                </div>
                <Paper square={true} className={classes.contentContainer} elevation={3}>
                    <Typography variant={"body1"}>
                        {'Tsokolwiek!! '.repeat(100)}
                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default withStyles(EntityPaperStyles)(AvatarCard);