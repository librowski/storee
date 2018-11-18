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
import { AppBar, Divider, Drawer, IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";
import { NavigationStyles } from "./NavigationStyles";
import classNames from "classnames";
import { ChevronLeft, Menu } from "@material-ui/icons";
import DrawerMenu from "./DrawerMenu";
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isDrawerOpen: false,
        };
        _this.handleDrawerOpen = function () {
            _this.setState({ isDrawerOpen: true });
        };
        _this.handleDrawerClose = function () {
            _this.setState({ isDrawerOpen: false });
        };
        return _this;
    }
    Navigation.prototype.render = function () {
        var classes = this.props.classes;
        return (React.createElement("div", { className: classes.root },
            React.createElement(AppBar, { position: "static", className: classNames(classes.appBar, this.state.isDrawerOpen && classes.appBarShift), color: "primary" },
                React.createElement(Toolbar, { disableGutters: !this.state.isDrawerOpen },
                    React.createElement(IconButton, { color: "inherit", "aria-label": "Open drawer", onClick: this.handleDrawerOpen, className: classNames(classes.menuButton, this.state.isDrawerOpen && classes.hide) },
                        React.createElement(Menu, null)),
                    React.createElement(Typography, { variant: "title", color: "inherit" }, "Storee"))),
            React.createElement(Drawer, { classes: { paper: classNames(classes.drawerPaper, !this.state.isDrawerOpen && classes.drawerPaperClose) }, open: this.state.isDrawerOpen, variant: "permanent" },
                React.createElement("div", { className: classes.toolbar },
                    React.createElement(IconButton, { onClick: this.handleDrawerClose },
                        React.createElement(ChevronLeft, null))),
                React.createElement(Divider, null),
                React.createElement(DrawerMenu, { isDrawerOpen: this.state.isDrawerOpen })),
            React.createElement("main", { className: classNames(classes.content, this.state.isDrawerOpen && classes.contentBlur) }, this.props.children)));
    };
    return Navigation;
}(React.Component));
export default withStyles(NavigationStyles, { withTheme: true })(Navigation);
//# sourceMappingURL=Navigation.js.map