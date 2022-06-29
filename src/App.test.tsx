import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const headerText = screen.getByText(/REACT CHALLENGE/i)
  expect(headerText).toBeInTheDocument()
})
