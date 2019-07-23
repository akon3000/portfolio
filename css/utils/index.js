import { css } from 'styled-components'

export const Indent = css`
  text-indent: ${({ indent = 20 }) => indent}px;
`