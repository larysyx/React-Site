import { ButtonProps } from "interfaces/button.interface"
import styled, { css } from "styled-components"
import { colors } from "styles/GlobalStyle"

const colorVariations = {
  default: css`
    background-color: ${colors.third};
    outline: 0.2rem outset ${colors.primary};
  `,
  add: css`
    background-color: ${colors.white};
    outline: 0.2rem outset ${colors.white};
  `,
  edit: css`
    background-color: ${colors.success};
    outline: 0.2rem outset ${colors.success};
  `,
  remove: css`
    background-color: ${colors.danger};
    outline: 0.2rem outset ${colors.danger};
  `
}

export const Botao = styled.button<ButtonProps>`
  color: ${colors.white};
  font-weight: bold;
  background-color: ${colors.third};
  padding: 0.6rem;
  border: 0;
  border-radius: 0.6rem;
  width: 5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  svg {
    width: 2rem;
    height: 2rem;
  }
  ${(props) => colorVariations[props.bgColor || "default"]}
`