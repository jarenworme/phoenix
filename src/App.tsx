import './App.css'
import ApplicationWrapper from './components/templates/ApplicationWrapper'
import { Container } from "@chakra-ui/react"
import Router from './components/routes'


function App() {
  return (
    <Container
    maxW={['container.sm', 'container.md', 'container.lg']}
    p="0"
    mx="auto"
    minHeight={"100vh"}>
      <ApplicationWrapper>
        <Router />
      </ApplicationWrapper>
    </Container>
  )
}

export default App
