import "../pages/assets/style.css";
//import "../pages/assets/pickPose.css";

import React, { Component } from "react";

import {
  Button,
} from "@material-ui/core";

const axios = require("axios");

var getUserName = localStorage.getItem("userName");
var myGreeting = "Welcome! " + getUserName;

export default class Dashboard extends Component {
  logOut = () => {
    localStorage.setItem("token", null);
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Button
          className="button_style"
          variant="contained"
          size="large"
          style={{ marginRight: "10px", float: "right", color: "#b03231"}}
          onClick={this.logOut}
        >
          Log Out
        </Button>
        <div>
          <h2>{myGreeting}</h2>
        </div>
        <div>
          <div class="top-container">
            <h1>YOGA POSE ESTIMATION</h1>
            {/* <h2>Build by students of Computer Scinece & Engineering</h2> */}
            <h2 id="subHeading">This project estimates the yoga posture being perfromed by an individual.</h2>
            <h4>Dvelopers : CSE Group 5</h4>
            <h4>Project Guide : Dr. Preetha Mathew & Asst. Prof. Anitha Marry Chacko</h4>
          </div>
          <div class="options-container" style={{ float: "center" }}>
            <div className="a-wrapper">
              <img
                src="imgs/yoga-titlepage.jpeg"
                className="yoga-title"
                alt="yoga-title-page"
              />
            </div>
            <div style={{ float: "centre", alignItems: "center" }}>
              <a
                href="https://cucek-cusat.github.io/yogaPose/pickPose.html"
                className="buttonss"
              >
                Choose Pose
              </a>
              <a
                href="https://cucek-cusat.github.io/yogaPose/about.html"
                className="buttonss"
              >
                About us
              </a>
            </div>
          </div>
        </div>
        <footer>&copy; Copyright 2023. By CSE CUCEK</footer>
      </div>
    );
  }
}
