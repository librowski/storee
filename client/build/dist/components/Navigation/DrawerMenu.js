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
import { List } from "@material-ui/core";
import { Book, CompareArrows, Face, LocationCity, People } from "@material-ui/icons";
import DrawerMenuLink from "./DrawerMenuLink";
var DrawerMenu = /** @class */ (function (_super) {
    __extends(DrawerMenu, _super);
    function DrawerMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrawerMenu.prototype.render = function () {
        var open = this.props.isDrawerOpen;
        return (React.createElement(List, { disablePadding: true },
            React.createElement(DrawerMenuLink, { isDrawerOpen: open, icon: React.createElement(Face, { color: "inherit" }), title: "Characters", path: "/characters" }),
            React.createElement(DrawerMenuLink, { isDrawerOpen: open, icon: React.createElement(People, { color: "inherit" }), title: "Groups", path: "/groups" }),
            React.createElement(DrawerMenuLink, { isDrawerOpen: open, icon: React.createElement(LocationCity, { color: "inherit" }), title: "Locations", path: "/locations" }),
            React.createElement(DrawerMenuLink, { isDrawerOpen: open, icon: React.createElement(Book, { color: "inherit" }), title: "Threads", path: "/threads" }),
            React.createElement(DrawerMenuLink, { isDrawerOpen: open, icon: React.createElement(CompareArrows, { color: "inherit" }), title: "Connections", path: "/connections" })));
    };
    return DrawerMenu;
}(React.Component));
export default DrawerMenu;
//# sourceMappingURL=DrawerMenu.js.map