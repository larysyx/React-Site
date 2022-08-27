import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Section = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    background-color: ${colors.thirdLight};
    border: 0.2rem solid ${colors.third};
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-top: 6rem;
    > svg {
      display: flex;
      height: 4rem;
      width: 4rem;
      margin-left: 10rem;
      margin-right: 10rem;
      margin-bottom: 1rem;
    }
    div {
      background-color: ${colors.white};
      border: 0.15rem solid ${colors.third};
      border-radius: 0.6rem;
      display: flex;
      margin: 0.5rem 0;
      svg {
        height: 3rem;
        width: 3rem;
        padding: 0.3rem;
        color: ${colors.primary};
      }
      input {
        width: 100%;
        font-size: 1rem;
        border: 0;
        background-color: transparent;
      }
    }
    p {
      margin-top: 1rem;
      a {
        text-decoration: none;
        color: ${colors.black};
        font-weight: bold;
        margin-right: 4.2rem;
      }
    }
  }
`