
import { combineReducers } from 'redux';
import internalFinancesReducer from "./internalFinancesReducer";


export default combineReducers({
    internal: internalFinancesReducer
});