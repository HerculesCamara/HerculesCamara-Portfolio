import Image from 'next/image'
import { Container, FilterButton, Item, List } from './styles'

import { FaFilter } from 'react-icons/fa'
import { useState } from 'react'

export function Filter() {
  const [toggle, setToggle] = useState(false)

  return (
    <Container>
      <FilterButton onClick={() => setToggle(!toggle)} isActive={toggle}>
        <span>All</span> <FaFilter />
      </FilterButton>
      <List isActive={toggle}>
        <Item>Rocketseat</Item>
        <Item>CSS Battle</Item>
      </List>
    </Container>
  )
}
