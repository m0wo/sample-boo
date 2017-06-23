import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';

class Nav extends Component {

  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'dnytkcx1g',
        upload_preset: 'seaesjph',
        tags: ['sampleBoo'],
        sources: ['local']
      },
      function(error, result) {
          if(error) {
            console.log("Error: ", error);
          }
      });
  }

  render() {
    return (
      <nav className="navbar navbar-static-top navbar-inverse">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Sample Boo.</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">All Sounds</Link>
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <a onClick={this.uploadWidget}>Upload Sounds</a> :  ''
            }
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right log-button">
          {
            (isLoggedIn()) ?
            (
              <li><a onClick={() => logout()}><span className="glyphicon glyphicon-log-out"></span> Log Out</a></li>
            )
            :
            (
              <li><a onClick={() => login()}><span className="glyphicon glyphicon-log-in" onClick={() => login()}></span> Log In</a></li>
            )
          }
        </ul>
      </nav>
    );
  }
}
export default Nav;
