import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #f0f2f5;
        --black-50: #1a1d1b;
        --black-100: #000000;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape:#fff;
    }

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    
    }

    html{
        @media (max-width:1080px){
            font-size: 93.75%;
        }

        @media (max-width:720px){
            font-size: 87.5%;
        }
    }

    body{
        background-color:var(--background);
        -webkit-font-font-smooth:antialiased;
    }

    button{
        cursor:pointer;
    }

    body, input, textarea, button{
        font-family:'Noto Sans',sans-serif;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight:700;
    }

`