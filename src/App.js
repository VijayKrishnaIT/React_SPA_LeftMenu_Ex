import React, { Component } from "react";
//super class List
import List from "@material-ui/core/List";
//child is ListItem to create sidemenu
import ListItem from "@material-ui/core/ListItem";
//define label
import ListItemText from "@material-ui/core/ListItemText";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-3">
            <List>
              <ListItem button>
                <ListItemText>
                  <NavLink
                    to="/about"
                    exact
                    strict
                    activeStyle={{ color: "greenyellow" }}
                  >
                    ABOUT
                  </NavLink>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <NavLink
                    to="/portfolio"
                    exact
                    strict
                    activeStyle={{ color: "greenyellow" }}
                  >
                    PORTFOLIO
                  </NavLink>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <NavLink
                    to="/contact"
                    exact
                    strict
                    activeStyle={{ color: "greenyellow" }}
                  >
                    CONTACT
                  </NavLink>
                </ListItemText>
              </ListItem>
            </List>
          </div>
          <div className="col-9">
            <Route path="/about" exact strict component={About}></Route>
            <Route path="/portfolio" exact strict component={Portfolio}></Route>
            <Route path="/contact" exact strict component={Contact}></Route>
          </div>
        </div>
      </Router>
    );
  }
}
