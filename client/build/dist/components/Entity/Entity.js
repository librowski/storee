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
import { createStyles, Grid } from "@material-ui/core";
import AvatarCard from "./AvatarCard";
import EntityPaper from "./EntityPaper";
var styles = createStyles({
    gridColumn: {
        flexDirection: "column",
        display: "flex",
    },
});
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Entity.prototype.render = function () {
        var character = this.props.character;
        return (React.createElement(Grid, { container: true, spacing: 24, style: { height: "100%" } },
            React.createElement(Grid, { item: true, xs: 12, sm: 12, md: 8, lg: 6, xl: 4, style: styles.gridColumn },
                React.createElement(AvatarCard, { character: character }),
                React.createElement(EntityPaper, { character: character, title: "Description" }, character.description)),
            React.createElement(Grid, { item: true, xs: 12, sm: 12, md: 4, lg: 6, xl: 8, style: styles.gridColumn },
                React.createElement(EntityPaper, { character: character, title: "Additional Data" }, "There will be additional data some day"))));
    };
    return Entity;
}(React.Component));
export default Entity;
//# sourceMappingURL=Entity.js.map