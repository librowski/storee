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
import { Paper, Typography, withStyles } from "@material-ui/core";
import { avatarCardStyles } from "./AvatarCardStyles";
import { Add, Edit, People } from "@material-ui/icons";
var AvatarCard = /** @class */ (function (_super) {
    __extends(AvatarCard, _super);
    function AvatarCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvatarCard.prototype.render = function () {
        var _a = this.props, classes = _a.classes, character = _a.character;
        var dynamicStyle = {
            background: "url(" + character.imageURL + ") no-repeat center",
        };
        return (React.createElement(Paper, { square: true, elevation: 3, className: classes.card },
            React.createElement("div", { className: classes.contentContainer },
                React.createElement("div", { className: classes.nameContainer },
                    React.createElement(Typography, { className: classes.name, variant: "title", color: "inherit" }, character.name)),
                React.createElement("div", { className: classes.badgesContainer },
                    React.createElement(Paper, { className: classes.badge },
                        React.createElement(Edit, { color: "inherit" })),
                    React.createElement(Paper, { className: classes.badge },
                        React.createElement(People, { color: "inherit" })),
                    React.createElement(Paper, { className: classes.badge },
                        React.createElement(Add, { color: "inherit" }))),
                React.createElement(Paper, { elevation: 4, className: classes.avatar, style: dynamicStyle }))));
    };
    return AvatarCard;
}(React.Component));
export default withStyles(avatarCardStyles, { withTheme: true })(AvatarCard);
//# sourceMappingURL=AvatarCard.js.map