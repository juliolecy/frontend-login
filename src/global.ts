import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        box-sizing:  border-box;
    }

    html{
    font-size: 62,5%;
    scroll-behavior:smooth;
    width: 100%;
    height: 100%;
}

    body {
        font-family: 'Nunito', sans-serif;
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        font-size: 1.6rem;
        background-image: url('/images/bg.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #141414;
    }

    input, button, textarea, h1, h2, h3, h4, h5, h6 {
        font-family: 'Nunito', sans-serif;
    }

    :root{
        --blue: #09c6e5;
    }
`;
