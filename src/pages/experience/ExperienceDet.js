import React, { Component } from "react";
import "./ExperienceDet.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { experience } from "../../portfolio";
import { Fade } from "react-reveal";

class ExperienceDet extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Work Experience
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {experience.experience.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default ExperienceDet;
