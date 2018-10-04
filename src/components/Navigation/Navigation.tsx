import * as React from 'react';
import {AppBar, Divider, Drawer, IconButton, Toolbar, Typography, withStyles, WithStyles} from "@material-ui/core";
import {NavigationStyles} from "./NavigationStyles";
import classNames from 'classnames';
import {ChevronLeft, Menu} from "@material-ui/icons";
import DrawerMenu from "./DrawerMenu";

interface NavigationState {
    isDrawerOpen: boolean;
}

class Navigation extends React.Component<WithStyles<typeof NavigationStyles>, NavigationState> {

    public state = {
        isDrawerOpen: false,
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar
                    position={'absolute'}
                    className={classNames(classes.appBar, this.state.isDrawerOpen && classes.appBarShift)}
                >
                    <Toolbar
                        disableGutters={!this.state.isDrawerOpen}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, this.state.isDrawerOpen && classes.hide)}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant={"title"}>Storee</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.isDrawerOpen && classes.drawerPaperClose),
                    }}
                    open={this.state.isDrawerOpen}
                    variant={'permanent'}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeft />
                        </IconButton>
                    </div>
                    <Divider />
                    <DrawerMenu isDrawerOpen={this.state.isDrawerOpen}/>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.props.children}
                </main>
            </div>
        );
    }

    private handleDrawerOpen = (): void => {
        this.setState({isDrawerOpen: true});
    };

    private handleDrawerClose = (): void => {
        this.setState({isDrawerOpen: false});
    };
}

export default withStyles(NavigationStyles, {withTheme: true})(Navigation);