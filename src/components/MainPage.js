import React, {Component} from 'react';
import '../styles/MainPage.scss'
import {connect} from "react-redux";
import {toggleNav} from "../actionCreators/internalActions";


class MainPage extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
    };

    render() {

        return (
                <div className="front">
                    <div className="front-wrapper">
                        <div className="front-text">Finances, made easy.</div>

                        <div onClick={this.props.toggleNav} className="front-button">Get started</div>
                    </div>
                </div>
        );
    }
}

export default connect(null,{toggleNav})(MainPage);
