import { css } from 'styled-components' 

export default class {
  constructor() {
    this.color = ''
  }

  set = (hex) => {
    this.color = hex
    return  this
  }

  toHex = () => this.color

  toColor = () => css`color: ${this.color};`

  toBgColor = () => css`background-color: ${this.color};`
}