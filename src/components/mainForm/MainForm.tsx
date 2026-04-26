import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles/Cycles";
import { DefaultButton } from "../defaultButton/defaultButton";
import { DefaultInput } from "../defaultInput/DefaultInput";

export function MainForm() {
  return (
    <>
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
          <DefaultButton icon={<PlayCircleIcon />} color='green' />
        </div>
      </form>
    </>
  )
}