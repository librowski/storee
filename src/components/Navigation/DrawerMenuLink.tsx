import * as React from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {createStyles, Fade, ListItem, ListItemIcon, Typography} from "@material-ui/core";

const styles = createStyles({
    activeLink: {
        color: '#aaaaff',
    },
    activeMenuItem: {
        backgroundColor: '#aaaaff40',
    },
});

interface DrawerMenuLinkProps {
    title: string;
    path: string;
    icon: React.ReactElement<any>;
    isDrawerOpen: boolean;
}

class DrawerMenuLink extends React.Component<DrawerMenuLinkProps & RouteComponentProps> {

    render() {
        const isActive = this.props.path === this.props.location.pathname;

        return (
            <ListItem
                button={true}
                style={isActive ? styles.activeMenuItem : {}}
                onClick={this.handleClick}
            >
                <ListItemIcon
                    style={isActive ? styles.activeLink : {}}
                >
                    {this.props.icon}
                </ListItemIcon>
                <Fade in={this.props.isDrawerOpen}>
                    <Typography
                        style={isActive ? styles.activeLink : {}}
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

export default withRouter(DrawerMenuLink);