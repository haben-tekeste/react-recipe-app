import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: white;
        color: black;
        font-family: 'Nunito', sans-serif;
        overflow-x: hidden;
        margin: 0% 15%;
    }
`
export default GlobalStyle;