const Constants = {
    SET_PRELOADER: 'SET_PRELOADER',
    SET_LOADER: 'SET_PRELOADER'
};

export const setPreloader = (value) => ({
    type: Constants.SET_PRELOADER,
    payload: value,
});

export const setLoader = (value) => ({
    type: Constants.SET_LOADER,
    payload: value,
});


export function reducer(state = {}, action) {
    switch (action.type) {
        case Constants.SET_PRELOADER:
            return { ...state, preloader: action.payload };

        case Constants.SET_LOADER:
            return { ...state, loader: action.payload };
        default:
            return state;
    }
}
