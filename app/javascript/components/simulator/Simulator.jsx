import React from 'react';

import api from '../../services/api';
import Img from '../layout/Image';

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

    async changeQuote(quote) {
        let response = await api.get(`/all/${quote}`);
        this.setState({
            quote: {
                value: response.data[quote].low,
                name: response.data[quote].name
            }
        });
    };

    render(){
        return(
            <div className="card-simulator">
                <div className="card-simulator__title">
                    <p>
                        <span className="card-simulator__coin-name">{this.state.quote.name} </span>
                        <span className="card-simulator__coin-value">R$ {this.state.quote.value}</span>
                    </p>
                </div>
                <div className="card-simulator__content">
                    <div className="quote-form">
                        <div className="quote-form__content">
                            <div className="quote-form__box">
                                <i className="quote-form__cash-icon fa fa-map-marker"></i>
                                <select className="quote-form__input">
                                    <option value="SP">São Paulo (SP)</option>
                                    <option value="RJ">Rio de Janeiro (RJ)</option>
                                </select>
                                <div>
                                    <i className="fa fa-search quote-form__search-icon"></i>
                                </div>
                            </div>
                            <div className="quote-form__box">
                                <i className="fa fa-dollar quote-form__cash-icon"></i>
                                <select onChange={(e) => this.changeQuote(e.target.value)} className="quote-form__input">
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