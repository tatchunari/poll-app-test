import { useEffect, useState, useRef  } from 'react';
import RandomButton from '../components/RandomButton';
// styling
import '../styles/index.css';
import BubbleRight from '../assets/bubble.svg?react';
import BubbleLeft from '../assets/bubble-left.svg?react';
import ThumbUpWhite from '../assets/thumbs-up-white.svg?react';
import ThumbDownWhite from '../assets/thumbs-down-white.svg?react';
import ThumbUpBlue from '../assets/thumbs-up-blue.svg?react';
import ThumbDownBlue from '../assets/thumbs-down-blue.svg?react';
import RestartButton from '../assets/restart-button.svg?react';



const PollPage = ({ question, onRandom, onStart }) => {

  const [yesVote, setYesVote] = useState(0);
  const [noVote, setNoVote] = useState(0);

  const handleYesVote = () => {
    setYesVote((prev) => prev + 1);
  }
  const handleNoVote = () => setNoVote((prev) => prev + 1);

  const handleRestart = () => {
    setYesVote(0);
    setNoVote(0);
  }

  useEffect(() => {
    setYesVote(0);
    setNoVote(0);
  }, [question])

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 640);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize); 
    }, []);
    return isMobile;
  };

  const isMobile = useIsMobile();
  const bgImage = isMobile ? question.bgMobile : question.bgDesktop

  console.log('PollPage question:', question);

  return (
    <div className='w-full min-h-screen overflow-hidden flex justify-center'>

      {/* Background Layer */}
      <div 
      className='w-full relative max-w-[1440px] bg-cover bg-no-repeat bg-center flex z-0'
      style={{ backgroundImage: `url(${bgImage})`}}
      >
      
      {/* Overlay layer */}
      <div className='absolute h-full inset-0 bg-white opacity-50 z-10'></div>

      {/* Poll Container */}
      <div className='z-20 flex flex-col items-center w-full max-w-[1440px] max-h-[1220px]'>
      
      {/* Question */}
      <div className='flex justify-center mt-20 relative'>

        {/* Wood-sign */}
        <img 
        className='w-[80%] max-w-md'
        src='/images/wood-sign.png'
        />

        {/* Question Text */}
        <h2 className='absolute font-secondary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md sm:text-xl text-center text-black font-bold'>{question.text}</h2>
        
      </div>

        {/* Button Container */}
        <div className='flex flex-col mt-[16px]'>

        {/* Vote Button */}
        <div className='flex flex-row items-center justify-center gap-[112px]'>
          
          {/* Yes Button */}
          <div className='relative w-24 h-24 flex items-center justify-center'>
            <button 
              onClick={handleYesVote}
              className='z-10'
              >
              <ThumbUpWhite className='w-[96px] fill-white active:fill-blue-500 active:scale-95 active:translate-y-0.5 transition-all duration-100 hover:cursor-pointer'/>
            </button>
          </div>

          {/* No Button */}
          <div className='relative w-24 h-24 flex items-center justify-center'>
            <button 
              onClick={handleNoVote}
              className='z-10'
              >
              <ThumbDownWhite className='w-[96px] fill-white active:fill-blue-500 active:scale-95 active:translate-y-0.5 transition-all duration-100 hover:cursor-pointer'/>
            </button>
          </div>
        </div>

        {/* Vote Count */}
      
          <div className='flex flex-row justify-center gap-[112px] my-5'>
            <div className='relative flex items-center justify-center w-24 h-24'>
              <BubbleRight className='absolute inset-0 w-full h-20 z-0'/>
              <p className='font-extrabold text-xl font-2p text-black z-10'>
            {yesVote}
            </p>
            </div>
          
          <div className='relative flex items-center justify-center w-24 h-24'>
           <BubbleLeft className='absolute inset-0 w-full h-20 z-0'/>
              <p className='font-extrabold text-4xl font-primary text-black z-10'></p> 
            <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold text-xl font-2p text-black z-10'>
            {noVote}
           </p>
          </div>
          </div>

        {/* Random & Restart Button */}
        <div className='relative flex justify-center gap-10'>
        <button onClick={onStart}
        className='relative font-secondary flex items-center justify-center px-10 py-10 transition-all duration-150 hover:scale-105 active:scale-95 active:translate-y-0.5 hover:cursor-pointer'>
          <p className='text-white font-bold text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] z-10'>เลือกใหม่</p>
         <RestartButton className='absolute z-0 inset-0 object-contain w-full h-full' /> 
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