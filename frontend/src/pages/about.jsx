
import "../pages/assets/style.css";
import "../pages/assets/pickPose.css";

import React, { Component } from 'react';

import swal from 'sweetalert';
const axios = require('axios');

export default class About extends Component {
  logOut = () => {
    localStorage.setItem('token', null);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
      About CUCEK
      </div>
    );
  }
}



