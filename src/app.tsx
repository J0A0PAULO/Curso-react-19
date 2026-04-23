import { PlayCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { Container } from './components/container/Container';
import { CountDown } from './components/countDown/CountDown';
import { Cycles } from './components/cycles/Cycles';
import { DefaultButton } from './components/defaultButton/defaultButton';
import { DefaultInput } from './components/defaultInput/DefaultInput';
import { Footer } from './components/footer/Footer';
import { Heading } from './components/heading/Heading';
import { Logo } from './components/logo/Logo';
import { Menu } from './components/menu/Menu';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  const [numero, setNumero] = useState(0);

  return (
    <>
      <Heading>Numero : {numero}</Heading>
      <button onClick={() => {
        console.log(setNumero(numero + 1), Date.now().toString().slice(-4, -1));

      }}>Aumenta</button>

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
            <DefaultInput labelText={numero.toString()} id='meuId' type='text' placeholder='Digite Algo'></DefaultInput>
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <Cycles></Cycles>
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>
      <Container>
        <Footer></Footer>
      </Container>
    </>
  );
}