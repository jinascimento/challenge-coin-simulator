import PropTypes from 'prop-types';
import axios from 'axios';
import React from 'react';

export default class Simulator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: {
                value: Object.values(this.props.quote)[0].low,
                name: Object.values(this.props.quote)[0].name
            },
        };
    };

    changeQuote = (quote) => (
        this.setState({ quote })
    );

    render(){
        return(
            <div className="card-simulator">
                <div className="card-simulator__title">
                    <p>
                        <span className="card-simulator__coin-name">{this.state.quote.name} </span>
                        <span className="card-simulator__coin-value">R$ {this.state.quote.value}</span>
                    </p>
                    <i className="fa fa-camera"></i>
                </div>

                <div className="card-simulator__content">
                    <div className="quote-form">
                        <div className="quote-form__content">
                            <div className="quote-form__box">
                                <img className="quote-form__locale-img" src="assets/ic_pin_drop_24px.png" alt="" />
                                    <select className="quote-form__input">
                                        <option value="SP">São Paulo (SP)</option>
                                        <option value="RJ">Rio de Janeiro (RJ)</option>
                                    </select>
                            </div>
                            <div className="quote-form__box">
                                <img className="quote-form__locale-img" src="assets/ic_pin_drop_24px.png" alt="" />
                                    <select className="quote-form__input">
                                        <option value="USD">Dólar</option>
                                        <option value="EUR">Euro</option>
                                    </select>
                            </div>
                        </div>
                        <div className="quote-form__button">
                            <button className="quote-form__button-submit"><span>Comparar casas de câmbio</span></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};