import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const Panel = props => {
  const scrollTo = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose(false);
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollTo("featured")}>
          Home
        </ListItem>
        <ListItem button onClick={() => scrollTo("information")}>
          Information
        </ListItem>
        <ListItem button onClick={() => scrollTo("sale")}>
          Sale
        </ListItem>
        <ListItem button onClick={() => scrollTo("packages")}>
          Packages
        </ListItem>
        <ListItem button onClick={() => scrollTo("location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Panel;
