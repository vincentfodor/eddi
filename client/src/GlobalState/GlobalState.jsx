import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const GlobalState = ({children, initialState, reducers}) => {
    return (
        <StateContext.Provider value={useReducer(reducers, initialState)}>
            { children }
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext);