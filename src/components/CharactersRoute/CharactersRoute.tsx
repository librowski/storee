import * as React from "react";
import { CharacterAction } from "../../store/Character/reducer";
import { Dispatch } from "redux";
import { getCharacters } from "../../store/Character/actions";
import { connect } from "react-redux";
import { Character } from "../../store/Character/types";
import { AppState } from "../../App";
import { match as Match, Route, Switch } from "react-router";
import CharacterCollection from "../CharacterCollection/CharacterCollection";
import CharacterResource from "../CharacterResource/CharacterResource";

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

    return (
      <Switch>
        <Route
          path="/characters/:id(\d+)"
          render={this.renderCharacterResource}
        />
        <Route>
            <CharacterCollection characters={this.props.characters}/>
        </Route>
      </Switch>
    );
  }

  private readonly renderCharacterResource = ({ match }: { match: Match<{ id: string }> }): React.ReactNode => {
    const character = this.props.characters[match.params.id];
    return <CharacterResource character={character}/>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersRoute);
