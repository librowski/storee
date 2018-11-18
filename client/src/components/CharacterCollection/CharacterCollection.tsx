import * as React from "react";
import { Character } from "../../store/Character/types";
import EntityCard from "../EntityCard/EntityCard";
import { Grid } from "@material-ui/core";

interface CharacterCollectionProps {
  characters: Character[];
}

class CharacterCollection extends React.Component<CharacterCollectionProps> {
  public render(): React.ReactNode {
    const charactersList = this.props.characters.map(
      (character: Character, index: number) => {
        return (
          <EntityCard
            key={index}
            id={index}
            character={character}
          />
        );
      });
    return (
      <Grid container={true} spacing={24}>
        {charactersList}
      </Grid>
    );
  }
}

export default CharacterCollection;
