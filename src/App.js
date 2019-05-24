import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import FinancesRouter from "./FinancesRouter";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <FinancesRouter/>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
