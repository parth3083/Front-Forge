import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/react';


export interface CounterStatetype {
    html: string;
    css: string;
    javascript: string;
    currentLanguage: "html" | "css" | "javascript" ;
  }
  
const initialState : CounterStatetype={
    html: "",
    css: "",
    javascript: "",
    currentLanguage:"html"
}
  
export const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action:PayloadAction<CounterStatetype["currentLanguage"]>) => {
            state.currentLanguage = action.payload;
        }
    },
})

export default compilerSlice.reducer
export const {updateCurrentLanguage} = compilerSlice.actions;