import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

    *, *::before, *::after{
            padding: 0;
            margin: 0;
            box-sizing: 0;
        }

    html{
        font-family: 'Inter', sans-serif;
        
        //colors
        --black: #000000;
        --white: #ffffff;
        --primary-dark: #303030;

        //font-weights
        --fw-regular: 400;
        --fw-bold: 700;

        //paddings and margins
        --widget-padding: 2rem 1.5rem 0rem 1.5rem;
        
        @media screen and (min-width: 768px){
            --widget-padding: 5rem 4rem 0 4rem;
        }

        @media screen and (min-width: 1440px){
            --widget-padding: 3.5rem 10rem 0 10rem;
        }
    }

    p{
        line-height: 1.375rem;
    }

    h1{
        font-size: 6.25rem;
        line-height: 6.25rem;
        letter-spacing: -2.5px;
        font-weight: $fw-bold;
    }

    h2{
        font-size: 1rem;
        line-height: 1.75rem;
        letter-spacing: 3px;
    }

    @media screen and (min-width: 768px){
        p{
            font-size: 1.125rem;
            line-height: 1.75rem;
        }
    
        h1{
            font-size: 11rem;
            line-height: 11rem;
            letter-spacing: -4.38px;
        }
    
        h2{
            font-size: 1.125rem;
            letter-spacing: 3.6px;
        }
    }
    @media screen and (min-width: 1440px){
        h1{
            font-size: 12.5rem;
            line-height: 12.5rem;
            letter-spacing: -5px;
        }
    
        h2{
            font-size: 1.5rem;
            letter-spacing: 4.8px;
        }
    }

`

export default GlobalStyles