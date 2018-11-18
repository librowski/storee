var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import EntityCard from "../EntityCard/EntityCard";
import { Grid } from "@material-ui/core";
var CharacterCollection = /** @class */ (function (_super) {
    __extends(CharacterCollection, _super);
    function CharacterCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterCollection.prototype.render = function () {
        var charactersList = this.props.characters.map(function (character, index) {
            return (React.createElement(EntityCard, { key: index, id: index, character: character }));
        });
        return (React.createElement(Grid, { container: true, spacing: 24 }, charactersList));
    };
    return CharacterCollection;
}(React.Component));
export default CharacterCollection;
//# sourceMappingURL=CharacterCollection.js.map