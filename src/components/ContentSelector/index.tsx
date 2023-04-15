import { Fragment, useState } from "react";
import { Container, Selector } from "./styles";
import Link from 'next/link'
import { useRouter } from "next/router";

export function ContentSelector(){

  const router = useRouter()

  const options = [
    {
      label: "Dev",
      link: '/projects'
    },
    {
      label: "UI/UX",
      link: '/projects?category=ui'
    }
  ]

  console.log(router)

  return (<>
  <Container>
    {options.map((option, index) =>
      (
        <Fragment key={option.link}>
          <Link href={option.link}>
            <Selector isActive={router.asPath === option.link}>
              {option.label}
            </Selector>
          </Link>
          {index !== options.length - 1 ? <hr /> : null}
        </Fragment>
      )  
    )}
  </Container>
  </>)
}