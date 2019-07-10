import { Component } from 'react'
import { createPortal } from 'react-dom'

class Portal extends Component {
  constructor(props) {
    super(props)
    this.body = document.body
    this.element = document.createElement('div')
  }

  componentDidMount() {
    this.body.appendChild(this.element)
  }

  componentWillUnmount() {
    this.body.removeChild(this.element)
  }

  render() {
    return createPortal(this.props.children, this.element)
  }
}

export default Portal
