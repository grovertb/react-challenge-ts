import { Container, Divider } from '@mui/material'
import { FC, useState } from 'react'

import { useFlasher } from 'utils/hooks'

interface AgeDisplayProps {
  length: number
}

interface NameDisplayProps {
  name: string
}

const FourthChallenge = () => {
  const [ age, setAge ] = useState(3)
  const [ name, setName ] = useState('John Doe')

  return (
    <Container>
      <input onChange={e => setName(e.target.value)} placeholder='Name' value={name} />
      <NameDisplay name={name} />
      <Divider />
      <input onChange={e => setAge(Number(e.target.value))} placeholder='Age' value={age} />
      <AgeDisplay length={age} />
    </Container>
  )
}

const AgeDisplay: FC<AgeDisplayProps> = ({ length }) => {
  const myRef = useFlasher<HTMLDivElement>()

  return (
    <div ref={myRef}>
      <p>Age: {length}</p>
    </div>
  )
}

const NameDisplay: FC<NameDisplayProps> = ({ name }) =>  {
  const myRef = useFlasher<HTMLDivElement>()

  return (
    <div ref={myRef}>
      <p>Your name is: {name}</p>
    </div>
  )
}

export default FourthChallenge
