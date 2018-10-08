import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { createStyles, Fade, ListItem, ListItemIcon,
  Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

const styles = (theme: Theme): StyleRules => createStyles({
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
  icon: React.ReactElement<SvgIconProps>;
  isDrawerOpen: boolean;
}

class DrawerMenuLink extends React.Component<DrawerMenuLinkProps & RouteComponentProps & WithStyles<typeof styles>> {

  public render(): React.ReactNode {
    const { classes, location, path } = this.props;
    const isActive = location.pathname !== "/" && path.match(location.pathname);

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

  private readonly handleClick = (): void => {
    this.props.history.push(this.props.path);
  }

}

export default withRouter(withStyles(styles, { withTheme: true })(DrawerMenuLink));
