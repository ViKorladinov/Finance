import React, {Component} from 'react';
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage";
import Profile from "./components/Profile";
import NavigationBar from "./components/NavigationBar";

class FinancesRouter extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div style={{display:'flex', height:'100vh'}}>
                <Route path="/" component={NavigationBar} />
                <Route exact path="/" component={MainPage} />
                <Route exact path="/profile" component={Profile} />
            </div>
        );
    }
}

export default FinancesRouter;
