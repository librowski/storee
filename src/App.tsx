import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Navigation from "./components/Navigation/Navigation";
import CharactersRoute from "./components/CharactersRoute/CharactersRoute";
import GroupsRoute from "./components/GroupsRoute/GroupsRoute";
import LocationsRoute from "./components/LocationsRoute/LocationsRoute";
import ThreadsRoute from "./components/ThreadsRoute/ThreadsRoute";
import ConnectionsRoute from "./components/ConnectionsRoute/ConnectionsRoute";
import {AnyAction, combineReducers, createStore, Store} from "redux";
import {Provider} from "react-redux";
import {charactersReduce} from "./store/Character/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Character} from "./store/Character/types";
import {Resource} from "./store/types";

export interface AppState {
    characters: Resource<Character>;
}

export const rootReducer = combineReducers({
    characters: charactersReduce,
});

const store: Store<AppState, AnyAction> = createStore(
    rootReducer,
    composeWithDevTools(),
);

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#E8FFFF',
            main: '#B9F6CA',
            dark: '#69966A',
            contrastText: '#FFF',
        }
    }
});

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <CssBaseline />
                    <MuiThemeProvider theme={theme}>
                        <div>
                            <BrowserRouter>
                                    <Navigation>
                                        <Route path={'/characters'} component={CharactersRoute} />
                                        <Route path={'/groups'} component={GroupsRoute} />
                                        <Route path={'/locations'} component={LocationsRoute} />
                                        <Route path={'/threads'} component={ThreadsRoute} />
                                        <Route path={'/connections'} component={ConnectionsRoute} />
                                    </Navigation>
                            </BrowserRouter>
                        </div>
                    </MuiThemeProvider>
                </React.Fragment>
            </Provider>
        );
    }
}

export default App;
