import { ShoppingCart } from 'phosphor-react'

import { ButtonContainer } from './styles'

interface ButtonCartProps {
  onUpdateQuantity?: () => void
}

export function ButtonCart({ onUpdateQuantity }: ButtonCartProps) {
  return (
    <ButtonContainer>
      <button type="button" onClick={onUpdateQuantity}>
        <ShoppingCart size={23} />
      </button>
    </ButtonContainer>
  )
}
