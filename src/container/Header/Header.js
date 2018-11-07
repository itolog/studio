import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { TimelineLite, Back } from "gsap";

import "./Header.scss";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.tl = new TimelineLite();
    //ASSETS
    this.cris_1 = require("../../assets/images/Осколок_1.png");
    this.cris_2 = require("../../assets/images/Осколок_2.png");
    this.cris_3 = require("../../assets/images/Осколок_3.png");
    this.logo = require("../../assets/images/jp.png");
    //REFS
    this.cris1 = React.createRef();
    this.cris2 = React.createRef();
    this.cris3 = React.createRef();
    this.title = React.createRef();
    this.subTitle = React.createRef();
    this.btns = React.createRef();
  }
  animate = () => {
    this.tl
      .fromTo(this.title.current, 1, { opacity: 0 }, { opacity: 1 }, 1)
      .fromTo(this.subTitle.current, 1, { opacity: 0 }, { opacity: 1 }, 2)
      .fromTo(this.btns.current, 1, { opacity: 0 }, { opacity: 1 }, 2.5)
      .to(
        this.cris1.current,
        2,
        { ease: Back.easeOut.config(1.7), x: 150, y: -50 },
        3.1
      )
      .to(
        this.cris2.current,
        2,
        { ease: Back.easeOut.config(1.7), x: 140, y: -87 },
        3.2
      )
      .to(
        this.cris3.current,
        2,
        { ease: Back.easeOut.config(1.7), x: 120, y: -55 },
        3.3
      );
  };
  componentDidMount() {
    this.animate();
  }

  render() {
    return (
      <section className="section page-1" id="#firstPage">
        <img className="cris1" src={this.cris_1} alt="img1" ref={this.cris1} />
        <img className="cris2" src={this.cris_2} alt="img2" ref={this.cris2} />
        <img className="cris3" src={this.cris_3} alt="img3" ref={this.cris3} />
        <div className="page-1-wrapp">
          <div className="page-1__logo">
            <img className="page-1__logo__img" src={this.logo} alt="logo" />
          </div>
          <div className="page-1__content">
            <h1 className="page-1__content__title" ref={this.title}>
              Графическая
              <br />
              упаковка инфопродуктов
            </h1>
            <p className="page-1__content__text" ref={this.subTitle}>
              От сайта до презинтации на вебинар
            </p>
            <div className="page-1__action" ref={this.btns}>
              <ul className="page-1__action__btn">
                <li
                  data-menuanchor="about"
                  className="page-1__action__li page-1__action__li_left"
                >
                  <a className="page-1__action__href" href="#about">
                    Узнать подробнее
                  </a>
                </li>
                <li className="page-1__action__li">
                  <a className="page-1__action__href" href="#/">
                    Связатся с нами
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    load: state.headReducer.loadHeader
  };
};

export default connect(mapStateToProps)(Header);
