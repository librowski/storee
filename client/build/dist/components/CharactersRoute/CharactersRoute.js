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
import { getCharacters } from "../../store/Character/actions";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import CharacterCollection from "../CharacterCollection/CharacterCollection";
import CharacterResource from "../CharacterResource/CharacterResource";
var mapDispatchToProps = function (dispatch) { return ({
    fetchCharacters: function () { return getCharacters()(dispatch); },
}); };
var mapStateToProps = function (state) { return ({
    characters: state.characters.data,
}); };
var CharactersRoute = /** @class */ (function (_super) {
    __extends(CharactersRoute, _super);
    function CharactersRoute() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderCharacterResource = function (_a) {
            var match = _a.match;
            var character = _this.props.characters[match.params.id];
            return React.createElement(CharacterResource, { character: character });
        };
        return _this;
    }
    CharactersRoute.prototype.componentDidMount = function () {
        this.props.fetchCharacters();
    };
    CharactersRoute.prototype.render = function () {
        return (React.createElement(Switch, null,
            React.createElement(Route, { path: "/characters/:id(\\d+)", render: this.renderCharacterResource }),
            React.createElement(Route, null,
                React.createElement(CharacterCollection, { characters: this.props.characters }))));
    };
    return CharactersRoute;
}(React.Component));
export default connect(mapStateToProps, mapDispatchToProps)(CharactersRoute);
//# sourceMappingURL=CharactersRoute.js.map