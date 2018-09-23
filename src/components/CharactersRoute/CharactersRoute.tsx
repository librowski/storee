import * as React from 'react';
import {CharacterAction} from "../../store/Character/reducer";
import {Dispatch} from "redux";
import {getCharacters} from "../../store/Character/actions";
import {connect} from "react-redux";
import {Button, Paper, Typography} from "@material-ui/core";
import {Character} from "../../store/Character/types";
import {AppState} from "../../App";

interface CharactersRouteProps {
    fetchCharacters: () => void;
    characters: Character[];
}

const mapDispatchToProps = (dispatch: Dispatch<CharacterAction>) => ({
    fetchCharacters: () => getCharacters()(dispatch),
});

const mapStateToProps = (state: AppState) => ({
    characters: state.characters.data,
});

class CharactersRoute extends React.PureComponent<CharactersRouteProps> {
    render() {
        return (
            <div>
                <Button onClick={this.props.fetchCharacters}>
                    Fetch Characters
                </Button>
                {
                    this.props.characters.map(
                        character => {
                            return (
                                <Paper>
                                    <Typography variant={'title'}>{character.name}</Typography>
                                    <Typography>{character.description}</Typography>
                                </Paper>
                            );
                    })
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersRoute);