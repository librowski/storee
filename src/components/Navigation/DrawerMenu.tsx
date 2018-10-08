import * as React from "react";
import { List } from "@material-ui/core";
import { Book, CompareArrows, Face, LocationCity, People } from "@material-ui/icons";
import DrawerMenuLink from "./DrawerMenuLink";

interface DrawerMenuProps {
  isDrawerOpen: boolean;
}

class DrawerMenu extends React.Component<DrawerMenuProps> {

  public render(): React.ReactNode {
    const open = this.props.isDrawerOpen;

    return (
      <List disablePadding={true}>
        <DrawerMenuLink
          isDrawerOpen={open}
          icon={<Face color={"inherit"}/>}
          title={"Characters"}
          path={"/characters"}
        />
        <DrawerMenuLink
          isDrawerOpen={open}
          icon={<People color={"inherit"}/>}
          title={"Groups"}
          path={"/groups"}
        />
        <DrawerMenuLink
          isDrawerOpen={open}
          icon={<LocationCity color={"inherit"}/>}
          title={"Locations"}
          path={"/locations"}
        />
        <DrawerMenuLink
          isDrawerOpen={open}
          icon={<Book color={"inherit"}/>}
          title={"Threads"}
          path={"/threads"}
        />
        <DrawerMenuLink
          isDrawerOpen={open}
          icon={<CompareArrows color={"inherit"}/>}
          title={"Connections"}
          path={"/connections"}
        />
      </List>
    );
  }
}

export default DrawerMenu;
