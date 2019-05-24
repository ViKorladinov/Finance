import React, {Component} from 'react';
import '../styles/NavigationBar.scss'
import {connect} from "react-redux";


class NavigationBar extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {

        return (
            <div className={this.props.navStatus}>
                <div className="nav-item"/>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    navStatus: state.internal.navStatus
});
export default connect(mapStateToProps,null)(NavigationBar);
