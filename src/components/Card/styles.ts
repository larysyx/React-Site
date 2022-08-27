import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Card = styled.div`
  div {
    margin: 1.5rem;
    margin-top: 0;
    background-color: ${colors.thirdLight};
    border-radius: 0.5rem;
    padding: 0.2rem;
    h2, h4 {
      margin: 1rem 1.5rem 0.6rem;
    }
    div {
      display: flex;
      span {
        background-color: ${colors.third};
        border-radius: 0.5rem;
        padding: 0.4rem;
        margin: 0 0.4rem 0 0;
      }
    }
  }
`