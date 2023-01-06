import { Container, Content, Cover } from './styles'

interface cardProps {
  title?: string
  description?: string
  bannerLink?: string
}

export function Card({ title, description, bannerLink }: cardProps) {
  return (
    <>
      <Container>
        <Cover>
          <img src={bannerLink} alt="" />
        </Cover>
        <Content>
          <h1>{title}</h1>
          <p>{description}</p>
        </Content>
      </Container>
    </>
  )
}
