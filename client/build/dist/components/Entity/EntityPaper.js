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
import { entityPaperStyles } from "./EntityPaperStyles";
var AvatarCard = /** @class */ (function (_super) {
    __extends(AvatarCard, _super);
    function AvatarCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvatarCard.prototype.render = function () {
        var classes = this.props.classes;
        return (React.createElement("div", { className: classes.mainWrapper },
            React.createElement("div", { className: classes.paperHeader },
                React.createElement("div", { className: classes.paperTopLine }),
                React.createElement("div", { className: classes.paperTopCircle }),
                React.createElement(Typography, { className: classes.paperTitle, variant: "caption", color: "primary" }, this.props.title.toUpperCase()),
                React.createElement("div", { className: classes.paperTopCircle }),
                React.createElement("div", { className: classes.paperTopLine })),
            React.createElement(Paper, { square: true, className: classes.contentContainer, elevation: 3 },
                React.createElement(Typography, { variant: "body1" }, this.props.children))));
    };
    return AvatarCard;
}(React.Component));
export default withStyles(entityPaperStyles)(AvatarCard);
//# sourceMappingURL=EntityPaper.js.map