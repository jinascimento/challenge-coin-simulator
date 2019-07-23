import api from '../../services/api';
import React from 'react';
import Img from './Image';

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
                    <i className="fa fa-camera"></i>
                </div>

                <div className="card-simulator__content">
                    <div className="quote-form">
                        <div className="quote-form__content">
                            <div className="quote-form__box">
                                <Img class={'quote-form__locale-img'} path={'assets/ic_pin_drop_24px.png'} />
                                <select className="quote-form__input">
                                    <option value="SP">São Paulo (SP)</option>
                                    <option value="RJ">Rio de Janeiro (RJ)</option>
                                </select>
                            </div>
                            <div className="quote-form__box">
                                <Img class={'quote-form__locale-img'} path={'assets/ic_pin_drop_24px.png'} />
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