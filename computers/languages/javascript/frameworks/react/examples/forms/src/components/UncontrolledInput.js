import React from 'react'

export class UncontrolledInput extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const name = this._name.value

    console.info(name)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <input type='text' ref={input => this._name = input} />
        <button onClick={this.handleClick}>Sign up</button>
      </div>
    )
  }
}
