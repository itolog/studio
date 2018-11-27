import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { connect } from "react-redux";
import { loadedHeader, loadedAbout, loadedThird } from "./store/actions";

import "./App.scss";
import Header from "./container/Header/Header";
import About from "./container/About/About";
import Values from "./container/Values/Values";
import Video from "./component/Video/Video";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentLoad: false
    };
  }

  options = {
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    anchors: ["home", "about", "values", "video"],
    verticalCentered: false,
    fitToSection: false,
    lazyLoading: true,
    // showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: "bottom",
    controlArrows: false
  };

  afterLoad(origin, destination, direction) {
    //using anchorLink
    if (destination.anchor === "home") {
      this.props.loadedHeader();
    } else if (destination.anchor === "about") {
      this.props.loadedAbout();
    } else if (destination.anchor === "values") {
      this.props.loadedThird();
    }
  }

  componentDidMount() {
    this.setState({ contentLoad: true });
  }

  render() {
    if (!this.state.contentLoad) {
      return (
        <section className="load-wrapper">
          <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        </section>
      );
    } else {
      return (
        <ReactFullpage
          {...this.options}
          afterLoad={this.afterLoad.bind(this)}
          // onLeave={this.onLeave.bind(this)}
          render={({ state }) => {
            // console.log("render prop change", state);

            return (
              <ReactFullpage.Wrapper>
                <Header />
                <About />
                <Values />
                <Video />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    loadHeader: state.headReducer.loadHeader,
    loadAbout: state.headReducer.loadAbout,
    loadedThird: state.headReducer.loadedThird
  };
};

const mapDispatchToProps = dispatch => ({
  loadedHeader: () => dispatch(loadedHeader()),
  loadedAbout: () => dispatch(loadedAbout()),
  loadedThird: () => dispatch(loadedThird())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
