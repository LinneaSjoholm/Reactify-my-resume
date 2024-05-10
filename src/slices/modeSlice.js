import { createSlice } from "@reduxjs/toolkit";

// Definiera det initiala tillståndet för slicen.
const initialState = {
    // Kontrollera om värdet för mörkt läge finns sparad i localStorage,
    // om det finns, använd det, annars är standardvärdet false.
    darkMode: localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode")) : false
}

// Skapa ett Redux-slice för att hantera tillståndet för mörkt läge.
const modeSlice = createSlice({
    // Namnet på slicen.
    name: "mode",
    // Det initiala tillståndet för slicen.
    initialState: initialState,
    // Reducer-funktioner för att hantera åtgärder som påverkar tillståndet.
    reducers: {
        // Reducer-funktion för åtgärden setMode, som uppdaterar darkMode-tillståndet
        // baserat på det värde som skickas med åtgärden och sparar även värdet i localStorage.
        setMode(state, value) {
            state.darkMode = value.payload;
            localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
        }
    }
});

// Exportera åtgärden setMode från slicen.
export const { setMode } = modeSlice.actions;

// Exportera reducer-funktionen från slicen.
export default modeSlice.reducer;
