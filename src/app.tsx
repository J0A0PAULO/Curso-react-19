import { Container } from './components/container/Container';
import { Heading } from './components/heading/Heading';
import { Logo } from './components/logo/Logo';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}