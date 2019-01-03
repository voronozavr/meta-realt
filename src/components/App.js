import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import Ads from './Ads';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ads: []
        };
    }

    fetchAds() {
        axios.get('http://localhost:3333/ads/').then(
            response => {
                this.setState({
                    ads: response.data
                });
            }
        );
    }

    showAllAds() {
        return this.state.ads.map((ads, key) => {
            return (
                <Ads
                    key = {key}
                    address = {ads.address}
                    price = {ads.price}
                    rooms = {ads.rooms}
                    square = {ads.square}
                />
            );
        });
    }

    render () {
        return (
            <div>
                <button onClick={this.fetchAds.bind(this)}>Показать объявления</button>
                { this.showAllAds() }
            </div>
        );
    }
}

const state = props => {
    return {
      ...props,
    };
  };

export default connect(state)(App);