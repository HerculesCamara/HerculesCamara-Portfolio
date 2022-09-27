import { Container, Content, Cover } from './styles'

export function Card() {
  return (
    <>
      <Container>
        <Cover />
        <Content>
          <h1>AutoCalc</h1>
          <p>
            Lists in a more user-friendly and easy-to-understand way the
            mathematical formulas.
          </p>
        </Content>
      </Container>
    </>
  )
}
