import React from 'react'
import { ControlledInput, ControlledFunctionalInput } from './components/ControlledInput'
import { UncontrolledInput } from './components/UncontrolledInput'

import './App.css'

export const App = () => (
  <main>
    <section>
      <h2>Uncontrolled Input</h2>
      <UncontrolledInput />
    </section>
    <section>
      <h2>Controlled Input</h2>
      <ControlledInput />
    </section>
    <section>
      <h2>Controlled Input #2 (Hooks)</h2>
      <ControlledFunctionalInput />
    </section>
  </main>
)
