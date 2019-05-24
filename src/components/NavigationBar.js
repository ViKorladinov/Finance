import React, {Component} from 'react';
import '../styles/NavigationBar.scss'
import {connect} from "react-redux";
import Login from "./Login";


class NavigationBar extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        status: 'none'
    };

    renderContent() {
        switch (this.state.status) {
            case 'log':
                return <Login/>;
            case 'reg':
                return 'register';
            case "none":
            default:
                return ''
        }
    }

    change(status) {
        if (status !== this.state.status) {
            this.setState({status: status})
        } else this.setState({status: 'none'});
        console.log(this.state)
    }

    render() {
        return (
            <div className={this.props.navStatus}>
                <div className="nav-item">
                    <span onClick={() => {
                        this.change('log')
                    }} className="log">Login</span>
                    <span onClick={() => {
                        this.change('reg')
                    }} className="reg">Register</span>
                </div>
                <div className="nav-content">
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    navStatus: state.internal.navStatus
});
export default connect(mapStateToProps, null)(NavigationBar);
