import React, { useState } from 'react'

export class ControlledInput extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value }, () => {
      console.info(this.state)
    })
  }

  render() {
    return (
      <>
        <div>
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <pre>{'{'} name: &quot;{this.state.name}&quot; {'}'}</pre>
      </>
    )
  }
}

export const ControlledFunctionalInput = () => {
  const [name, setName] = useState('')

  const handleSubmit = event => {
    console.info(name)
    event.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
        <button type='submit'>Submit</button>
      </form>
      <pre>{'{'} name: &quot;{name}&quot; {'}'}</pre>
    </>
  )
}
