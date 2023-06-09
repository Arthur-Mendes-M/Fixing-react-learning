import { createGlobalStyle } from "styled-components";
import { flexBox, transitions } from "./variables";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 18px;
        transition: ${transitions.allLinearVQ};
    }

    body {
        ${flexBox("column", "unset", "space-between")}
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};
        font-family: monospace;

        min-height: 100vh;

        @media(min-width: 350px) {
            padding: 2% 5%;            
        }
    }

    #root {
        ${flexBox('column', undefined, undefined, 0.5)};
    }

    #author {
        ${flexBox(undefined, undefined, undefined, 2)}

        #logo {
            ${flexBox(undefined, undefined, undefined, .8)}
        }
    }

    /* Resets */

    a {
        /* text-decoration-color: rgba(${props => props.theme.colorsA.secondary}, .5); */
        text-decoration: none;
        color: ${props => props.theme.colors.secondary};
        transition: ${transitions.allLinearQ};

        &:hover {
            transform: scale(1.05);
            text-decoration-color: ${props => props.theme.colors.terciary};        
        }
    }

    svg {
        width: 20px;
        transition: ${transitions.allLinear};
    }

    button {
        background: none;
        border: 1px solid rgba(${props => props.theme.colorsA.secondary}, .5);
        border-radius: .5rem;
        padding: .5rem 1.5rem;
        color: rgba(${props => props.theme.colorsA.secondary}, .5);
        cursor: pointer;
        transition: ${transitions.allLinear};
        font-family: monospace;

        &:hover {
            border-color: ${props => props.theme.colors.secondary};
            color: ${props => props.theme.colors.secondary};
        }
    }

    .field {
        ${flexBox(undefined, undefined, undefined, 1, 'wrap')}
        width: 100%;
    }

    input, textarea {
        width: 100%;
        background: none;
        border: 1px solid rgba(${props => props.theme.colorsA.secondary}, .5);
        border-radius: .5rem;
        padding: .5rem 1rem;
        color: rgba(${props => props.theme.colorsA.secondary}, .5);
        cursor: pointer;
        transition: ${transitions.allLinear};
        font-family: monospace;

        &:hover, &:focus {
            border-color: ${props => props.theme.colors.secondary};
            color: ${props => props.theme.colors.secondary};
        }

        &.submitInput {
            border: 1px solid rgba(${props => props.theme.colorsA.terciary}, .5);

            &:hover, &:focus {
                border-color: ${props => props.theme.colors.terciary};
                box-shadow: 0 0 10px 3px rgba(${props => props.theme.colorsA.terciary}, .2);
            }
        }
    }

    textarea {
        min-height: 120px;
        resize: none;
    }
`;

export { GlobalStyle };