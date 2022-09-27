import Image from 'next/image'
import { Container, FilterButton, Item, List } from './styles'

import { FaFilter } from 'react-icons/fa'

export function Filter() {
  return (
    <Container>
      <FilterButton>
        <span>All</span> <FaFilter />
      </FilterButton>
      <List>
        <Item>Rocketseat</Item>
        <Item>CSS Battle</Item>
      </List>
    </Container>
  )
}
