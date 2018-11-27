import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { TimelineLite, Back } from "gsap";

import "./Values.scss";

class Values extends PureComponent {
  constructor(props) {
    super(props);

    this.tl = new TimelineLite();
  }

  animate = () => {
    this.tl
      .to(this.title, 1, {
        y: 0,
        opacity: 1,
        ease: Back.easeOut.config(1.7)
      })
      .staggerTo(
        this.items.children,
        0.5,
        { opacity: 1, y: 0, ease: Back.easeIn },
        0.1
      );
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.loadThird === true) {
      this.animate();
    }
  }

  render() {
    return (
      <section className="section page-3" id="#Our_values">
        <div className="page-3__wrapp">
          <div className="page-3__content">
            <h2 className="page-2__title__values" ref={e => (this.title = e)}>
              Наши ценности
            </h2>
            <div className="page-3__items">
              <ul className="page-3__ul" ref={e => (this.items = e)}>
                <li className="page-3__li">
                  <div className="page-3__li__logo clock" />
                  <div className="page-3__li__text">
                    <h3 className="page-3__li__text__title">Сроки</h3>
                    <p className="page-3__li__paragraf">
                      Мы понимаем важность вовремя сделанной презинтации,
                      поэтому всегда строго соблюдаем дедлайны
                    </p>
                  </div>
                </li>
                <li className="page-3__li page-3__li_right">
                  <div className="page-3__li__logo eye" />
                  <div className="page-3__li__text">
                    <h3 className="page-3__li__text__title">
                      Восприятия vs Креатив
                    </h3>
                    <p className="page-3__li__paragraf">
                      Если выбирать между удобством восприятия информации и
                      сверх-креативом, мы выберем первое
                    </p>
                  </div>
                </li>
                <li className="page-3__li">
                  <div className="page-3__li__logo brain" />
                  <div className="page-3__li__text">
                    <h3 className="page-3__li__text__title">Развитие</h3>
                    <p className="page-3__li__paragraf">
                      Мы всегда стремимся к развитию.И поэтому мы иногда
                      становимся клиентами наших клиентов :)
                    </p>
                  </div>
                </li>
                <li className="page-3__li page-3__li_right">
                  <div className="page-3__li__logo check" />
                  <div className="page-3__li__text">
                    <h3 className="page-3__li__text__title">Простота</h3>
                    <p className="page-3__li__paragraf">
                      Мы не "грузим" клиентов сложными терминами и не просим
                      написать 3-томное ТЗ.Вместо этого наш мененджер расскажет
                      всё на простом языке
                    </p>
                  </div>
                </li>
                <li className="page-3__li">
                  <div className="page-3__li__logo copy" />
                  <div className="page-3__li__text">
                    <h3 className="page-3__li__text__title">Закон</h3>
                    <p className="page-3__li__paragraf">
                      Мы чтим авторское право и используем только те материалы,
                      на которые у нас есть лицензия.
                    </p>
                  </div>
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
  return { loadThird: state.headReducer.loadThird };
};

export default connect(mapStateToProps)(Values);
