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
import { Grid, Paper, Typography, withStyles } from "@material-ui/core";
import { entityCardStyles } from "./EntityCardStyles";
import { withRouter } from "react-router";
import Truncate from "react-truncate";
var EntityCard = /** @class */ (function (_super) {
    __extends(EntityCard, _super);
    function EntityCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleCardClick = function () {
            _this.props.history.push("characters/" + _this.props.id);
        };
        return _this;
    }
    EntityCard.prototype.render = function () {
        var classes = this.props.classes;
        var _a = this.props.character, imageURL = _a.imageURL, name = _a.name, description = _a.description;
        var dynamicStyle = {
            background: "url(" + imageURL + ") no-repeat center",
        };
        return (React.createElement(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, xl: 2 },
            React.createElement(Paper, { className: classes.paper, square: true, elevation: 6, onClick: this.handleCardClick },
                React.createElement("div", { className: classes.imageContainer, style: imageURL && dynamicStyle }),
                React.createElement("div", { className: classes.textContainer },
                    React.createElement(Typography, { align: "center", variant: "title", color: "inherit", className: classes.nameText }, name),
                    React.createElement("div", { className: classes.descriptionDiv },
                        React.createElement(Typography, { align: "center", variant: "caption", color: "inherit" },
                            React.createElement(Truncate, { lines: 8 }, description)))))));
    };
    return EntityCard;
}(React.PureComponent));
export default withRouter(withStyles(entityCardStyles)(EntityCard));
//# sourceMappingURL=EntityCard.js.map