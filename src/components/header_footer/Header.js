import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import Panel from "./Panel";

class Header extends Component {
  state = {
    showPanel: false,
    showHeader: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        showHeader: true
      });
    } else {
      this.setState({
        showHeader: false
      });
    }
  };
  toggleDrawer = value => {
    this.setState({
      showPanel: value
    });
  };
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.showHeader ? "#2f2f2f" : "transparent",
          padding: "10px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div
              className="header_logo_venue"
              style={{
                color: this.state.showHeader ? "white" : "#2f2f2f"
              }}
            >
              The Otaku
            </div>
            <div
              className="header_logo_title"
              style={{
                color: this.state.showHeader ? "white" : "#2f2f2f"
              }}
            >
              Explosive Events
            </div>
          </div>
          <IconButton
            aria-label="Menu"
            onClick={() => this.toggleDrawer(true)}
            style={{
              color: this.state.showHeader ? "white" : "#2f2f2f"
            }}
          >
            <MenuIcon />
          </IconButton>
          <Panel
            open={this.state.showPanel}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}
export default Header;
