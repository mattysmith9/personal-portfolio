import { createGlobalStyle } from 'styled-components';
import './fonts';

const GlobalStyle = createGlobalStyle`
/* montserrat-100 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 100;
  font-display: auto;
  src: url('../fonts/montserrat-v13-latin-100.eot');
  src: local('Montserrat Thin'), local('Montserrat-Thin'),
    url('../fonts/montserrat-v13-latin-100.eot?#iefix')
      format('embedded-opentype'),
    url('../fonts/montserrat-v13-latin-100.woff2') format('woff2'),
    url('../fonts/montserrat-v13-latin-100.woff') format('woff'),
    url('../fonts/montserrat-v13-latin-100.ttf') format('truetype'),
    url('../fonts/montserrat-v13-latin-100.svg#Montserrat') format('svg');
}
/* montserrat-200 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 200;
  font-display: auto;
  src: url('../fonts/montserrat-v13-latin-200.eot');
  src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'),
    url('../fonts/montserrat-v13-latin-200.eot?#iefix')
      format('embedded-opentype'),
    url('../fonts/montserrat-v13-latin-200.woff2') format('woff2'),
    url('../fonts/montserrat-v13-latin-200.woff') format('woff'),
    url('../fonts/montserrat-v13-latin-200.ttf') format('truetype'),
    url('../fonts/montserrat-v13-latin-200.svg#Montserrat') format('svg');
}
/* montserrat-300 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: url('../fonts/montserrat-v13-latin-300.eot');
  src: local('Montserrat Light'), local('Montserrat-Light'),
    url('../fonts/montserrat-v13-latin-300.eot?#iefix')
      format('embedded-opentype'),
    url('../fonts/montserrat-v13-latin-300.woff2') format('woff2'),
    url('../fonts/montserrat-v13-latin-300.woff') format('woff'),
    url('../fonts/montserrat-v13-latin-300.ttf') format('truetype'),
    url('../fonts/montserrat-v13-latin-300.svg#Montserrat') format('svg');
}
/* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: url('../fonts/montserrat-v13-latin-regular.eot');
  src: local('Montserrat Regular'), local('Montserrat-Regular'),
    url('../fonts/montserrat-v13-latin-regular.eot?#iefix')
      format('embedded-opentype'),
    url('../fonts/montserrat-v13-latin-regular.woff2') format('woff2'),
    url('../fonts/montserrat-v13-latin-regular.woff') format('woff'),
    url('../fonts/montserrat-v13-latin-regular.ttf') format('truetype'),
    url('../fonts/montserrat-v13-latin-regular.svg#Montserrat') format('svg');
}
/* montserrat-500 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: auto;
  src: url('../fonts/montserrat-v13-latin-500.eot');
  src: local('Montserrat Medium'), local('Montserrat-Medium'),
    url('../fonts/montserrat-v13-latin-500.eot?#iefix')
      format('embedded-opentype'),
    url('../fonts/montserrat-v13-latin-500.woff2') format('woff2'),
    url('../fonts/montserrat-v13-latin-500.woff') format('woff'),
    url('../fonts/montserrat-v13-latin-500.ttf') format('truetype'),
    url('../fonts/montserrat-v13-latin-500.svg#Montserrat') format('svg');
}
/* montserrat-600 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: url('../fonts/montserrat-v13-latin-600.eot');
  src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
    url('../fonts/montserrat-v13-latin-600.eot?#iefix')
      format('embedded-opentype'),
    url('../fonts/montserrat-v13-latin-600.woff2') format('woff2'),
    url('../fonts/montserrat-v13-latin-600.woff') format('woff'),
    url('../fonts/montserrat-v13-latin-600.ttf') format('truetype'),
    url('../fonts/montserrat-v13-latin-600.svg#Montserrat') format('svg');
}
/* montserrat-700 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-display: auto;
  src: url('../fonts/montserrat-v13-latin-700.eot');
  src: local('Montserrat Bold'), local('Montserrat-Bold'),
    url('../fonts/montserrat-v13-latin-700.eot?#iefix')
      format('embedded-opentype'),
    url('../fonts/montserrat-v13-latin-700.woff2') format('woff2'),
    url('../fonts/montserrat-v13-latin-700.woff') format('woff'),
    url('../fonts/montserrat-v13-latin-700.ttf') format('truetype'),
    url('../fonts/montserrat-v13-latin-700.svg#Montserrat') format('svg');
}
/* montserrat-800 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: auto;
  src: url('../fonts/montserrat-v13-latin-800.eot');
  src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'),
    url('../fonts/montserrat-v13-latin-800.eot?#iefix')
      format('embedded-opentype'),
    url('../fonts/montserrat-v13-latin-800.woff2') format('woff2'),
    url('../fonts/montserrat-v13-latin-800.woff') format('woff'),
    url('../fonts/montserrat-v13-latin-800.ttf') format('truetype'),
    url('../fonts/montserrat-v13-latin-800.svg#Montserrat') format('svg');
}
/* montserrat-900 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: auto;
  src: url('../fonts/montserrat-v13-latin-900.eot');
  src: local('Montserrat Black'), local('Montserrat-Black'),
    url('../fonts/montserrat-v13-latin-900.eot?#iefix')
      format('embedded-opentype'),
    url('../fonts/montserrat-v13-latin-900.woff2') format('woff2'),
    url('../fonts/montserrat-v13-latin-900.woff') format('woff'),
    url('../fonts/montserrat-v13-latin-900.ttf') format('truetype'),
    url('../fonts/montserrat-v13-latin-900.svg#Montserrat') format('svg');
}
`;

export default GlobalStyle;
