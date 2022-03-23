import React, { Component } from "react";
import "./QuoteCard.css";
import { Fade, Flip } from "react-reveal";

class QuoteCard extends Component {
  render() {
    const quote = this.props.quote;
    const theme = this.props.theme;
    return (
      <div className="quote-card">
        <Fade right duration={2000} distance="40px">
          <div className="card-body">
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {quote.text}
                </h2>
                <h2 className="card-title" style={{ color: theme.text }}>
                  {quote.text2}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {quote.author}
                </h3>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default QuoteCard;
