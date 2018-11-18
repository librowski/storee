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
import Entity from "../Entity/Entity";
var CharacterResource = /** @class */ (function (_super) {
    __extends(CharacterResource, _super);
    function CharacterResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterResource.prototype.render = function () {
        var character = this.props.character;
        return (React.createElement("div", null,
            React.createElement(Entity, { character: character })));
    };
    return CharacterResource;
}(React.Component));
export default CharacterResource;
//# sourceMappingURL=CharacterResource.js.map