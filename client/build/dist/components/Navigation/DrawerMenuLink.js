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
import { withRouter } from "react-router";
import { createStyles, Fade, ListItem, ListItemIcon, Typography, withStyles } from "@material-ui/core";
var styles = function (theme) { return createStyles({
    activeLink: {
        color: theme.palette.primary.dark,
    },
    activeMenuItem: {
        backgroundColor: theme.palette.grey["200"],
    },
}); };
var DrawerMenuLink = /** @class */ (function (_super) {
    __extends(DrawerMenuLink, _super);
    function DrawerMenuLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            _this.props.history.push(_this.props.path);
        };
        return _this;
    }
    DrawerMenuLink.prototype.render = function () {
        var _a = this.props, classes = _a.classes, location = _a.location, path = _a.path;
        var isActive = location.pathname !== "/" && path.match(location.pathname);
        return (React.createElement(ListItem, { button: true, className: isActive ? classes.activeMenuItem : undefined, onClick: this.handleClick },
            React.createElement(ListItemIcon, { className: isActive ? classes.activeLink : undefined }, this.props.icon),
            React.createElement(Fade, { in: this.props.isDrawerOpen },
                React.createElement(Typography, { className: isActive ? classes.activeLink : undefined }, this.props.title))));
    };
    return DrawerMenuLink;
}(React.Component));
export default withRouter(withStyles(styles, { withTheme: true })(DrawerMenuLink));
//# sourceMappingURL=DrawerMenuLink.js.map