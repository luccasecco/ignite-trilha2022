import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import bgImg from '../../assets/bg.svg'
import { Cards } from '../../components/Cards'
import {
  ContentHome,
  DivContainerCart,
  DivContainerCoffee,
  DivContainerPackage,
  DivContainerTimer,
  HomeContainer,
  IconsContainer,
  OptionsContainer,
  TextContainer,
} from './styles'

export function Home() {
  return (
    <ContentHome>
      <HomeContainer>
        <TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <IconsContainer>
            <DivContainerCart>
              <ShoppingCart size={40} />
              Compra simples e segura
            </DivContainerCart>

            <DivContainerPackage>
              <Package size={40} />
              Embalagem mantém o café intacto
            </DivContainerPackage>
            <DivContainerTimer>
              <Timer size={40} />
              Entrega rápida e rastreada
            </DivContainerTimer>
            <DivContainerCoffee>
              <Coffee size={40} />O café chega fresquinho até você
            </DivContainerCoffee>
          </IconsContainer>
        </TextContainer>
        <div>
          <img src={bgImg} alt="Copo de café com grãos de café ao redor" />
        </div>
      </HomeContainer>
      <OptionsContainer>
        <Cards />
      </OptionsContainer>
    </ContentHome>
  )
}
