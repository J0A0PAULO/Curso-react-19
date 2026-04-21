import { PlayCircleIcon } from 'lucide-react';
import { Container } from './components/container/Container';
import { CountDown } from './components/countDown/CountDown';
import { Cycles } from './components/cycles/Cycles';
import { DefaultButton } from './components/defaultButton/defaultButton';
import { DefaultInput } from './components/defaultInput/DefaultInput';
import { Logo } from './components/logo/Logo';
import { Menu } from './components/menu/Menu';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>
      <Container>
        <Menu></Menu>
      </Container >
      <Container>
        <CountDown></CountDown>
      </Container>
      <Container>
        <form action="" className='form'>
          <div className="formRow">
            <DefaultInput labelText='task' id='meuId' type='text' placeholder='Digite Algo'></DefaultInput>
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <Cycles></Cycles>
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color='red' />
          </div>
        </form>
      </Container>
    </>
  );
}