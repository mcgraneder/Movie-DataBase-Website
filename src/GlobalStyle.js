import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`
    :root{
        --max-width: 1280px;
        --white: #000;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --extraLargeFont: 100px;
        --fontBig: 1.5.rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    //global styles
    * {
        box-sizing: border-box;
        font-family: abel, sans-serif;
        color: white;

    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;

        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }
`