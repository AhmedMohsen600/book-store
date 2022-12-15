import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 body {
     background-color: #f2f4f8;
     padding: 50px;
 }

.link {
    color: inherit;
    text-decoration: none;
}

li {
    list-style: none;
}
`;
