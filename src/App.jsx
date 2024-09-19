import { useState } from 'react'
import LoginPage from './pages/login';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <LoginPage/>
    </>
  )
}

