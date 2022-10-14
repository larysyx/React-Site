import styled from "styled-components"
import { colors } from "styles/GlobalStyle"
export const Cabecalho = styled.header`
  display: flex;
  background-color: ${colors.primary};
  picture img{
    height: 4.5rem;
    width: 4.5rem;
    margin: 0.6rem 0.8rem;
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      li {
        margin: 0 1.5em;
        a {
          text-decoration: none;
          font-size: 1.2em;
          color: ${colors.black};
          background-color: ${colors.white};
          padding: 0.4rem ;
          border-radius: 1.5rem;
        }
        section a{
          padding: 0.4rem 1.4rem 0.4rem 1.4rem;
        }
      }
    }
  }
`