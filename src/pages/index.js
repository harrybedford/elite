import React from 'react'
import { H1 } from '../components/typography'
import Container from '../components/container'
import Section from '../components/section'
import Button from '../components/button'

const HomePage = () => (
  <Container>
    <H1>Elite Yacht Covers</H1>
    <Section>
      About
      <Button
        onClick={x => x}
      >
        Get a quote
      </Button>
    </Section>
  </Container>
)

export default HomePage
