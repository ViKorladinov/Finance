const initialState = {
    navStatus: 'nav-wrapper',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_NAV':
            let status = '';
            switch (state.navStatus) {
                case "nav-wrapper":
                    status = "nav-wrapper-extended";
                    break;
                case "nav-wrapper-extended":
                    status = "nav-wrapper";
                    break;
                default:
                    break;

            }
            return {...state, navStatus:status};
        case '':
            break;
        default:
            return state;
    }
}
