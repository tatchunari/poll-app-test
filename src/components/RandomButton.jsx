import { getRandomQuestion, questions } from "../utils/random"
import RandomButtons from '../assets/random-button.svg?react';


const RandomButton = ({ onRandom }) => {

  const randomQuestion = getRandomQuestion();

  return (
    <div>
      <button 
      onClick={onRandom}
      className='relative font-secondary flex items-center justify-center px-12 py-12 transition-all duration-150 hover:scale-105 active:scale-95 active:translate-y-0.5 hover:cursor-pointer'>
        <p className='z-10 font-bold text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px]'>สุ่มใหม่</p>
         <RandomButtons className='absolute z-0 inset-0 w-full h-full object-contain' />      
      </button>

    </div>
  )
}

export default RandomButton