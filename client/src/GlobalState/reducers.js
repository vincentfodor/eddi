export default (state, action) => {
    switch(action.type) {
        case 'SET_CURRENT_NAVIGATION_PATH':
            return {
                ...state,
                currentNavigationPath: action.payload.currentNavigationPath
            }
        default:
            return state;
    }
}