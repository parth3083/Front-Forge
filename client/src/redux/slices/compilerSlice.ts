import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/react';


export interface CounterStatetype {
    fullcode: {
        html: string;
    css: string;
    javascript: string;
},
    currentLanguage: "html" | "css" | "javascript" ;
  }
  
const initialState : CounterStatetype={
    fullcode: {
        html: `
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Example</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a basic example of HTML, CSS, and JavaScript.</p>
    <button id="myButton">Click Me</button>
  <script src="script.js">
  </script>
  </body>
</html>`,
        css: `
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

h1 {
  color: #333;
}

p {
  color: #666;
  margin-bottom: 20px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}`,
        javascript: `
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
});`,
    },
    currentLanguage:"html"
}
  
export const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action:PayloadAction<CounterStatetype["currentLanguage"]>) => {
            state.currentLanguage = action.payload;
        },
        updateCodeValue: (state, action:PayloadAction<string>) => {
            state.fullcode[state.currentLanguage] = action.payload;
      },
      updateLoadCode: (state, action:PayloadAction<CounterStatetype["fullcode"]>) => {
          state.fullcode = action.payload;
        }
    },
})

export default compilerSlice.reducer
export const {updateCurrentLanguage,updateCodeValue,updateLoadCode} = compilerSlice.actions;