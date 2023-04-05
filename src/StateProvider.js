// for react context api👇

import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayout😐📥
export const StateContext = createContext();

// wrap app and provide in a datalayer  
// for data access...
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
 
// pull info from the data layer...
export const useStateValue = () => useContext(StateContext);
