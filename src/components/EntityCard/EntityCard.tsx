import * as React from "react";
import { Grid, Paper, Typography, WithStyles, withStyles } from "@material-ui/core";
import { entityCardStyles } from "./EntityCardStyles";
import { RouteComponentProps, withRouter } from "react-router";
import { Character } from "../../store/Character/types";
import Truncate from "react-truncate";

interface EntityCardOwnProps {
  id: number;
  character: Character;
}

type EntityCardProps = EntityCardOwnProps & RouteComponentProps & WithStyles<typeof entityCardStyles>;

class EntityCard extends React.PureComponent<EntityCardProps> {

  public render() {
    const { classes } = this.props;
    const { imageURL, name, description } = this.props.character;
    const dynamicStyle = {
      background: `url(${imageURL}) no-repeat center`,
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
          onClick={this.handleCardClick}
        >
          <div className={classes.imageContainer} style={imageURL && dynamicStyle}/>
          <div className={classes.textContainer}>
            <Typography
              align={"center"}
              variant={"title"}
              color={"inherit"}
              className={classes.nameText}
            >
              {name}
            </Typography>
            <div className={classes.descriptionDiv}>
              <Typography align={"center"} variant={"caption"} color={"inherit"}>
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

  private handleCardClick = () => {
    this.props.history.push(`characters/${this.props.id}`);
  }
}

export default withRouter(withStyles(entityCardStyles)(EntityCard));
