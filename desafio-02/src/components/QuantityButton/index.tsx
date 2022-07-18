import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { QuantityButtonContainer, MinusButton, PlusButton } from './styles'

export function QuantityButton() {
  const [counter, setCounter] = useState(0)

  function hadleSubValue() {
    if (counter >= 1) {
      setCounter(counter - 1)
    }
  }

  function handleAddValue() {
    setCounter(counter + 1)
  }

  return (
    <QuantityButtonContainer>
      <div>
        <MinusButton onClick={hadleSubValue}>
          <Minus size={24} />
        </MinusButton>
        <span>{counter}</span>
        <PlusButton onClick={handleAddValue}>
          <Plus size={24} />
        </PlusButton>
      </div>
    </QuantityButtonContainer>
  )
}
