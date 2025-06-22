import { getRandomQuestion, questions } from "../utils/random"


const RandomButton = ({ onRandom }) => {

  const randomQuestion = getRandomQuestion();

  return (
    <div>
      <button 
      onClick={onRandom}
      className='nes-btn is-warning font-secondary'
      >
      สุ่มใหม่? 
      </button>

    </div>
  )
}

export default RandomButton