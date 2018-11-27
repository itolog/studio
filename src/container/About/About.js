import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { TimelineLite, Back, Bounce } from "gsap";
import data from "./data.json";

import "./About.scss";

class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataContent: data.content
    };
    this.tl = new TimelineLite();
    //REFS
    this.title = React.createRef();
    this.text = React.createRef();
  }

  animate = () => {
    this.tl
      .to(this.title.current, 1, {
        y: 0,
        opacity: 1,
        ease: Back.easeOut.config(1.7)
      })
      .to(this.text.current, 1.5, {
        y: 0,
        opacity: 1,
        ease: Bounce.easeOut
      });
  };
  componentDidUpdate() {
    // Typical usage (don't forget to compare props):
    if (this.props.loadAbout === true) {
      this.animate();
    }
  }

  render() {
    return (
      <section className="section page-2" id="#about">
        <div className="page-2__wrapp">
          <div className="page-2__content">
            <h2 className="page-2__title" ref={this.title}>
              О нас
            </h2>
            <div className="animDiv" ref={this.text}>
              {this.state.dataContent.map(val => {
                return (
                  <p className="page-2__content__text" key={val.id}>
                    {val.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { loadAbout: state.headReducer.loadAbout };
};

export default connect(mapStateToProps)(About);
