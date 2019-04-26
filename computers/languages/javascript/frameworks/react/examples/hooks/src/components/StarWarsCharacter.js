import React from 'react'
import { useTheForce } from '../hooks/useTheForce'
import PropType from 'prop-types'

export const StarWarsCharacter = ({ characterId }) => {
  const [character, isLoading, error] = useTheForce(characterId)

  return (
    <div>
      {isLoading
        ? error
          ? 'I have a bad feeling about this. Fetching character failed.'
          : 'Loading character...'
        : character && character.name
      }
    </div>
  )
}

StarWarsCharacter.propTypes = { characterId: PropType.number }
