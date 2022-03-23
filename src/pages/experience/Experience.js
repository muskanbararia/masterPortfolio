import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import QuoteCard from "../../components/quoteCard/QuoteCard";
import ExperienceDet from "./ExperienceDet";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    const quote = {
      text: "The purpose of Software Engineering is to ",
      text2: "control the complexity, not to create it.",
      author: "- Pamela Zave",
    };
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <QuoteCard quote={quote} theme={theme} />
              </div>
            </div>
          </Fade>
          <ExperienceDet theme={theme} />
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
