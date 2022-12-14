import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#F9A21E",
  secondary: "#F43B00",
  third: "#ffb74d",
  thirdLight: "#ffe9ca",
  white: "#ffffff",
  black: "#000000",
  success: "#15cc40",
  danger: "#C31111",
  button: "##f5961b",
}
