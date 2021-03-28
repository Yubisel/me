import React, { Component } from "react";
import { RouteConfig } from "router/Router";
import { BrowserRouter as Router } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <Router>
        <RouteConfig />
      </Router>
    );
  }
}

export default Layout;
