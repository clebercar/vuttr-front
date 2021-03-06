import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, border-style, #root{
        height: 100%;
    }

    body{
        font: 14px 'Roboto', sans-serif;
        background-color: #f8f9fc !important;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`;