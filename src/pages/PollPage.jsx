import { useState } from 'react';
import RandomButton from '../components/RandomButton';
// styling
import '../styles/index.css';
import Bubble from '../assets/bubble.svg?react';
import ButtonBackground from '../assets/vote-button.svg?react';

const PollPage = ({ question, onRandom, onStart }) => {

  const [yesVote, setYesVote] = useState(0);
  const [noVote, setNoVote] = useState(0);

  const handleYesVote = () => setYesVote((prev) => prev + 1);
  const handleNoVote = () => setNoVote((prev) => prev + 1);

  const handleRestart = () => {
    setYesVote(0);
    setNoVote(0);
  }

  return (
    <div>

      {/* Background Layer */}
      <div 
      className='relative bg-responsive bg-cover bg-no-repeat bg-center min-h-screen w-full flex justify-center z-0'>

      {/* Overlay layer */}
      <div className='absolute h-full inset-0 bg-white opacity-50 z-10'></div>

      {/* Poll Container */}
    <div className='z-20 flex flex-col'>
      
      {/* Question */}
      <div className='flex justify-center my-20 relative'>

        {/* Wood-sign */}
        <img 
        className='w-[80%] max-w-md'
        src='/images/wood-sign.png'
        />

        {/* Question Text */}
        <h2 className='absolute font-secondary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl text-center text-black font-bold px-2'>{question.text}</h2>
        
        </div>

        {/* Button Container */}
        <div className='flex flex-col'>

        {/* Vote Button */}
        <div className='flex flex-row items-center justify-center gap-20'>
          
          {/* Yes Button */}
          <div className='relative w-24 h-24 flex items-center justify-center'>
            <button 
              onClick={handleYesVote}
              className='z-10'
              >
              <img 
              src='images/like.svg'
              className='w-16'
              />
            </button>
            <ButtonBackground className='absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 z-0'/> 
          </div>

          {/* No Button */}
          <div className='relative w-24 h-24 flex items-center justify-center'>
            <button 
              onClick={handleNoVote}
              className='z-10'
              >
              <img 
              src='images/unlike.svg'
              className='w-16'
              />
            </button>
           <ButtonBackground className='absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 z-0'/>  
          </div>
        </div>

        {/* Vote Count */}
      
          <div className='flex flex-row justify-center gap-20 my-5'>
            <div className='relative flex items-center justify-center w-24 h-24'>
              <Bubble className='absolute inset-0 w-full h-full z-0'/>
              <p className='font-extrabold text-4xl font-primary text-black z-10 translate-y-3'>
            {yesVote}
            </p>
            </div>
          
          <div className='relative flex items-center justify-center w-24 h-24'>
            <Bubble className='absolute inset-0 w-full h-full z-0'/>
            <p className='font-extrabold text-4xl font-primary text-black z-10 translate-y-3'>
            {noVote}
           </p>
          </div>
          </div>

        {/* Random & Restart Button */}
        <div className='flex flex-row justify-center gap-3'>
        <button onClick={onStart}
        className='nes-btn font-secondary is-primary'>
          เลือกใหม่
        </button>

        <RandomButton 
        onRandom={onRandom}/>
        </div>
      </div>
    </div>
   </div>
  </div>
  )
}

export default PollPage;