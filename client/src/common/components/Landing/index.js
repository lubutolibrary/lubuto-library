import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => (
  <Fragment>
    <div className="container-fluid">
      <nav className="light-blue lighten-1 container-fluid" role="navigation">
        <div className="nav-wrapper">
          <a id="logo-container" href="#" className="brand-logo">
            Lubuto Library
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to='/dashboard/create-lesson'>Dashboard</Link>
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>
              <a href="#">Navbar Link</a>
            </li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </div>
    <div className="section no-pad-bot" id="index-banner">
      <div className="container">
        <br />
        <br />
        <h1 className="header center orange-text">Modern Lessons</h1>
        <div className="row center">
          <h5 className="header col s12 light">
            Libraries transforming Africa's next generation
          </h5>
        </div>
        <div className="row center">
           <Link to="/dashboard/create-lesson">
              <button  className="btn-large waves-effect waves-light blue" >
              Create Lessons
              </button>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>

    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center light-blue-text">
                <i className="material-icons">flash_on</i>
              </h2>
              <h5 className="center">Speeds up Learning</h5>

              <p className="light center">
                Learners will find this an easy way to learn
              </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center light-blue-text">
                <i className="material-icons">group</i>
              </h2>
              <h5 className="center">User Experience Focused</h5>

              <p className="light center">
                By utilizing elements and principles of Material Design, we were
                able to create a framework that incorporates components and
                animations that provide more feedback to users. Additionally, a
                single underlying responsive system across all platforms allow
                for a more unified user experience.
              </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center light-blue-text">
                <i className="material-icons">settings</i>
              </h2>
              <h5 className="center">Easy to work with</h5>

              <p className="light center">
                We will provided detailed documentation as well as specific code
                examples to help new users get started. We are also always open
                to feedback and can answer any questions a user may have about
                Materialize.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>

    <footer className="page-footer orange">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Company Bio</h5>
            <p className="grey-text text-lighten-4">
              Doing the best to provide with the best lessons
            </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Students</h5>
            <ul>
              <li>
                <a className="white-text" href="#!">
                  Learn
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Languages
                </a>
              </li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Teachers</h5>
            <ul>
              <li>
                <a className="white-text" href="#!">
                  Create Lessons
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">Made by BrianMuks Co</div>
      </div>
    </footer>
  </Fragment>
);

export default Landing;