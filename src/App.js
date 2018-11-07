import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { connect } from "react-redux";
import { loadedHeader, loadedAbout } from "./store/actions";

import "./App.scss";
import Header from "./container/Header/Header";
import About from "./container/About/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentLoad: false
    };
  }

  options = {
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    anchors: ["firstPage", "secondPage", "thirdPage"]
  };

  afterLoad(origin, destination, direction) {
    //using anchorLink
    if (destination.anchor === "firstPage") {
      this.props.loadedHeader();
    } else if (destination.anchor === "secondPage") {
      this.props.loadedAbout();
    }
  }

  // onLeave(origin, destination, direction) {
  //   //using anchorLink
  //   if (origin.index === 0) {
  //     this.props.unLoaded();
  //   } else if (origin.index === 1) {
  //     this.props.unLoaded();
  //   }
  // }

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
                <div className="section">
                  <h3>Section 3</h3>
                </div>
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
    loadAbout: state.headReducer.loadAbout
  };
};

const mapDispatchToProps = dispatch => ({
  loadedHeader: () => dispatch(loadedHeader()),
  loadedAbout: () => dispatch(loadedAbout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
