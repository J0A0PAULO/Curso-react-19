import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Heading>Ola Mundo
        <button><TimerIcon></TimerIcon></button>
      </Heading >
      <h1>ola mundo</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis dignissimos quae repudiandae, asperiores harum dicta ab explicabo labore velit nemo rem perspiciatis placeat pariatur natus. Dolor laboriosam est enim.</p>
    </>
  );
}