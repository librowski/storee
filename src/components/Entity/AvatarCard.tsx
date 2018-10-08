import * as React from "react";
import { Character } from "../../store/Character/types";
import { Paper, Typography, withStyles, WithStyles } from "@material-ui/core";
import { avatarCardStyles } from "./AvatarCardStyles";
import { Add, Edit, People } from "@material-ui/icons";

interface AvatarCardProps {
  character: Character;
}

class AvatarCard extends React.Component<AvatarCardProps & WithStyles<typeof avatarCardStyles>> {
  public render() {
    const { classes } = this.props;
    return (
      <Paper square={true} elevation={3} className={classes.card}>
        <div className={classes.contentContainer}>
          <div className={classes.nameContainer}>
            <Typography className={classes.name} variant={"title"} color={"inherit"}>
              Habadiba Pertebralis
            </Typography>
          </div>
          <div className={classes.badgesContainer}>
            <Paper className={classes.badge}>
              <Edit color={"inherit"}/>
            </Paper>
            <Paper className={classes.badge}>
              <People color={"inherit"}/>
            </Paper>
            <Paper className={classes.badge}>
              <Add color={"inherit"}/>
            </Paper>
          </div>
          <Paper elevation={4} className={classes.avatar}/>
        </div>
      </Paper>
    );
  }
}

export default withStyles(avatarCardStyles, { withTheme: true })(AvatarCard);
