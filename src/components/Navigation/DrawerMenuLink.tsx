import * as React from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {createStyles, Fade, ListItem, ListItemIcon, Theme, Typography, WithStyles, withStyles} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    activeLink: {
        color: theme.palette.primary.dark,
    },
    activeMenuItem: {
        backgroundColor: theme.palette.grey["200"],
    },
});

interface DrawerMenuLinkProps {
    title: string;
    path: string;
    icon: React.ReactElement<any>;
    isDrawerOpen: boolean;
}

class DrawerMenuLink extends React.Component<DrawerMenuLinkProps & RouteComponentProps & WithStyles<typeof styles>> {

    render() {
        const isActive = this.props.path === this.props.location.pathname;
        const {classes} = this.props;

        return (
            <ListItem
                button={true}
                className={isActive ? classes.activeMenuItem : undefined}
                onClick={this.handleClick}
            >
                <ListItemIcon
                    className={isActive ? classes.activeLink : undefined}
                >
                    {this.props.icon}
                </ListItemIcon>
                <Fade in={this.props.isDrawerOpen}>
                    <Typography
                        className={isActive ? classes.activeLink : undefined}
                    >
                        {this.props.title}
                    </Typography>
                </Fade>
            </ListItem>
        );
    }

    private handleClick = (): void => {
        this.props.history.push(this.props.path);
    };

}

export default withRouter(withStyles(styles,{withTheme: true})(DrawerMenuLink));