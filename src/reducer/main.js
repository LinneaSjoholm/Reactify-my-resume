import { combineReducers } from "@reduxjs/toolkit";
import modeReducer from '../slices/modeSlice.js';

// Kombinera reducer-funktioner från olika slicar till ett enda rotreducer-funktion.
const rootReducer = combineReducers({
    // Ange namnet på varje reducer och associera dem med respektive slicar.
    mode: modeReducer // modeReducer hanterar tillståndet för mörkt läge.
});

// Exportera den sammanslagna rotreducer-funktionen.
export default rootReducer;
