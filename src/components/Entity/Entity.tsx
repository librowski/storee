import * as React from "react";
import { createStyles, Grid } from "@material-ui/core";
import AvatarCard from "./AvatarCard";
import EntityPaper from "./EntityPaper";
import { Character } from "../../store/Character/types";

const styles = createStyles({
  gridColumn: {
    flexDirection: "column",
    display: "flex",
  },
});

interface EntityProps {
  character: Character;
}

class Entity extends React.Component<EntityProps> {
  public render(): React.ReactNode {
    const { character } = this.props;

    return (
      <Grid container={true} spacing={24} style={{ height: "100%" }}>
        <Grid item={true} xs={12} sm={12} md={8} lg={6} xl={4} style={styles.gridColumn}>
          <AvatarCard character={character}/>
          <EntityPaper character={character} title={"Description"}>
            {character.description}
          </EntityPaper>
        </Grid>
        <Grid item={true} xs={12} sm={12} md={4} lg={6} xl={8} style={styles.gridColumn}>
          <EntityPaper character={character} title={"Additional Data"}>
            There will be additional data some day
          </EntityPaper>
        </Grid>
      </Grid>
    );
  }
}

export default Entity;
