import * as React from 'react';
import {CharacterAction} from "../../store/Character/reducer";
import {Dispatch} from "redux";
import {getCharacters} from "../../store/Character/actions";
import {connect} from "react-redux";
import {Grid} from "@material-ui/core";
import {Character} from "../../store/Character/types";
import {AppState} from "../../App";
import EntityCard from "../EntityCard/EntityCard";

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

    componentDidMount() {
        this.props.fetchCharacters();
    }
    render() {
        return (
            <div>
                <Grid container={true} spacing={24}>
                {
                    this.props.characters.map(
                        (character, index) => {
                            return (
                                <EntityCard
                                    key={index}
                                    name={character.name}
                                    description={character.description}
                                />
                            );
                    })
                }
                </Grid>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersRoute);