import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        --color-primary: blue;
        --color-secondary: red;
    }

    html {
        height: 100%;
    }
    body {
        height: 100%;
        background: linear-gradient(#4D4D4D, #9B9B9B, #4D4D4D);
        margin: 0;
        display: flex;
        flex-direction: column;
    }

    main {
        display: flex;
        justify-content: center;
        padding: 5px;
        margin-top: 75px;
    }

    a {
        text-decoration: none;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: space-between;
    }
`;

export default GlobalStyle;