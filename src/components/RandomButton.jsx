import { getRandomQuestion, questions } from "../utils/random"

const RandomButton = ({ onRandom }) => {

  const randomQuestion = getRandomQuestion();

  return (
    <div>
      <button 
      onClick={onRandom}
      className='btn btn-soft btn-info w-30'
      >
        Random
      </button>

    </div>
  )
}

export default RandomButton