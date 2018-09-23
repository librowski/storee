import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createMuiTheme, createStyles, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Navigation from "./components/Navigation/Navigation";
import CharactersRoute from "./components/CharactersRoute/CharactersRoute";
import GroupsRoute from "./components/GroupsRoute/GroupsRoute";
import LocationsRoute from "./components/LocationsRoute/LocationsRoute";
import ThreadsRoute from "./components/ThreadsRoute/ThreadsRoute";
import ConnectionsRoute from "./components/ConnectionsRoute/ConnectionsRoute";

const styles = createStyles({
   app: {
       minHeight: '100%',
   }
});

const theme = createMuiTheme({

});

class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <MuiThemeProvider theme={theme}>
                    <div style={styles.app}>
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
        );
    }
}

export default App;
