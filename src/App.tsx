import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import AboutRoute from "./components/AboutRoute/AboutRoute";
import {
    AppBar,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    Toolbar,
    Typography
} from "@material-ui/core";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <AppBar>
                            <Toolbar>
                                <Typography variant={"title"} color={"secondary"}>Gitlab Vial</Typography>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            variant="permanent"
                            open={true}
                        >
                            <div>
                                <IconButton>

                                </IconButton>
                            </div>
                            <Divider />
                            <List>
                                <ListItem button={true}>
                                    <ListItemIcon>
                                        <IconButton />
                                    </ListItemIcon>
                                </ListItem>
                            </List>
                        </Drawer>
                        <Route path={'/about'} exact={true} component={AboutRoute} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
