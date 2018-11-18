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
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import Navigation from "./components/Navigation/Navigation";
import CharactersRoute from "./components/CharactersRoute/CharactersRoute";
import GroupsRoute from "./components/GroupsRoute/GroupsRoute";
import LocationsRoute from "./components/LocationsRoute/LocationsRoute";
import ThreadsRoute from "./components/ThreadsRoute/ThreadsRoute";
import ConnectionsRoute from "./components/ConnectionsRoute/ConnectionsRoute";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { charactersReduce } from "./store/Character/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
export var rootReducer = combineReducers({
    characters: charactersReduce,
});
var store = createStore(rootReducer, composeWithDevTools());
var theme = createMuiTheme({
    palette: {
        primary: {
            light: "#D7CCC8",
            main: "#795548",
            dark: "#5D4037",
            contrastText: "#FFF",
        },
        secondary: {
            light: "#607D8B",
            dark: "#607D8B",
            contrastText: "#FFF",
            main: "#607D8B",
        },
        background: {
            default: "#EBEBEB",
        },
        text: {
            primary: "#212121",
            secondary: "#757575",
        },
    },
});
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(Provider, { store: store },
            React.createElement(React.Fragment, null,
                React.createElement(CssBaseline, null),
                React.createElement(MuiThemeProvider, { theme: theme },
                    React.createElement("div", null,
                        React.createElement(BrowserRouter, null,
                            React.createElement(Navigation, null,
                                React.createElement(Switch, null,
                                    React.createElement(Route, { path: "/characters", component: CharactersRoute }),
                                    React.createElement(Route, { path: "/groups", component: GroupsRoute }),
                                    React.createElement(Route, { path: "/locations", component: LocationsRoute }),
                                    React.createElement(Route, { path: "/threads", component: ThreadsRoute }),
                                    React.createElement(Route, { path: "/connections", component: ConnectionsRoute })))))))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map