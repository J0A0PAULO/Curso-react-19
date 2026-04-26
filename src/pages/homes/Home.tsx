import { Container } from "../../components/container/Container";
import { CountDown } from "../../components/countDown/CountDown";
import { MainForm } from "../../components/mainForm/MainForm";
import { MainTemplate } from "../../components/templates/MainTemplates/MainTemplate";
import type { TaskStartModel } from "../../models/taskStateModel";


type HomeProps = {
  state: TaskStartModel,
  setState: React.Dispatch<React.SetStateAction<TaskStartModel>>
}

export function Home({ state, setState }: HomeProps) {
  console.log(state, setState);

  function handleCick() {
    setState(prevState => {
      return { ...prevState, currentCyCle: 5 };
    });
  }

  return (
    <MainTemplate>

      <Container>
        <button onClick={handleCick}>clicar</button>
      </Container>

      <Container>
        <CountDown></CountDown>
      </Container>

      <Container>
        <MainForm></MainForm>
      </Container>

    </MainTemplate>
  );
}