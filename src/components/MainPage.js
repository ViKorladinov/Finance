import React, {Component} from 'react';
import '../styles/MainPage.scss'


class MainPage extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
    };

    render() {

        return (
                <div className="front">
                    <div className="wrapper">
                        <div className="text">Finances, made easy.</div>

                        <div className="button">Get started</div>
                    </div>
                </div>
        );
    }
}

export default MainPage;
