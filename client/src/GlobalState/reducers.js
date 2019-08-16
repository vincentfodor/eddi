export default (state, action) => {
    switch(action.type) {
        case 'SET_CURRENT_NAVIGATION_PATH':
            console.log(action.payload);
            return {
                ...state,
                currentNavigationPath: action.payload.currentNavigationPath
            }
        default:
            return state;
    }
}