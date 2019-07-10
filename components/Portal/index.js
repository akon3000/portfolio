import { Component } from 'react'
import { createPortal } from 'react-dom'
class Portal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClient: false
    }
    this.body = null
    this.element = null
  }

  componentDidMount() {
    this.setState({ isClient: true })
    this.setupPortal()
    this.renderPortal()
  }

  componentWillUnmount() {
    this.destroyPortal()
  }

  setupPortal() {
    this.body = document.body
    this.element = document.createElement('div')
  }

  renderPortal() {
    this.body.appendChild(this.element)
  }

  destroyPortal() {
    this.body.removeChild(this.element)
  }

  render() {
    return this.state.isClient ? createPortal(this.props.children, this.element) : null
  }
}

export default Portal
