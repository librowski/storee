import * as React from "react";
import { CharacterAction } from "../../store/Character/reducer";
import { Dispatch } from "redux";
import { getCharacters } from "../../store/Character/actions";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { Character } from "../../store/Character/types";
import { AppState } from "../../App";
import EntityCard from "../EntityCard/EntityCard";
import { Route, Switch } from "react-router";
import Entity from "../Entity/Entity";

interface CharactersRouteProps {
  fetchCharacters: () => void;
  characters: Character[];
}

const mapDispatchToProps = (dispatch: Dispatch<CharacterAction>): Partial<CharactersRouteProps> => ({
  fetchCharacters: (): void => getCharacters()(dispatch),
});

const mapStateToProps = (state: AppState): Partial<CharactersRouteProps> => ({
  characters: state.characters.data,
});

class CharactersRoute extends React.Component<CharactersRouteProps> {

  public componentDidMount(): void {
    this.props.fetchCharacters();
  }

  public render(): React.ReactNode {
    const charactersList: React.ReactNode[] = this.props.characters.map(
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
      <Switch>
        <Route
          path="/characters/:id(\d+)"
          component={Entity}
        />
        <Route>
          <Grid container={true} spacing={24}>
            {charactersList}
          </Grid>
        </Route>
      </Switch>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersRoute);
