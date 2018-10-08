import * as React from "react";
import { Character } from "../../store/Character/types";
import Entity from "../Entity/Entity";

interface CharacterResourceProps {
  character: Character;
}

class CharacterResource extends React.Component<CharacterResourceProps> {
  public render(): React.ReactNode {
    const { character } = this.props;

    return (
      <div>
        <Entity character={character}/>
      </div>
    );
  }
}

export default CharacterResource;
