import * as React from 'react';
import {CharacterAction} from "../../store/Character/reducer";
import {Dispatch} from "redux";
import {charactersFetchRequest} from "../../store/Character/actions";
import {connect} from "react-redux";
import {Button} from "@material-ui/core";

interface CharactersRouteProps {
    fetchCharacters: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch<CharacterAction>) => ({
    fetchCharacters: () => dispatch(charactersFetchRequest),
});

class CharactersRoute extends React.PureComponent<CharactersRouteProps> {
    render() {
        return (
            <div>
                Characters
                <Button onClick={this.props.fetchCharacters}>
                    Fetch Characters
                </Button>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(CharactersRoute);