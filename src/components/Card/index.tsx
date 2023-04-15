import { Container, Content, Cover } from './styles'

export interface cardProps {
  id?: string
  title?: string
  description?: string
  bannerLink?: string
  link?: string
  topProject?: boolean
}

export function Card({ title, description, bannerLink, link }: cardProps) {
  return (
    <a href={link} target='_blank' rel="noreferrer">
      <Container>
        <Cover>
          <img src={bannerLink} alt="" />
        </Cover>
        <Content>
          <h1>{title}</h1>
          <p>{description}</p>
        </Content>
      </Container>
    </a>
  )
}
