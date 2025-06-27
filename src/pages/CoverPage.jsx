// styling
import '../styles/index.css'
import TextBubble from '../assets/text-bubble.svg?react';

const CoverPage = ({ onStart }) => {
  return (
    <div className='w-full min-h-screen bg-neutral-100 overflow-x-hidden flex justify-center'>
    <div 
    className="w-full bg-responsive bg-cover bg-center bg-no-repeat max-w-[1440px] min-h-[1220px] flex flex-col">
    <div className='flex justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20 mt-10 flex-grow'>
        <section>
          {/* Game title */}
          <div className='mt-[32px]'>
            <h1 className='relative font-primary text-black text-5xl font-bold leading-[70px]'>
              SAY
              <br />
              YOUR
              <br />
              <span className='text-yellow-400'>OPINIONS</span>
               <TextBubble className='absolute top-24 right-0 w-14 h-12 '/> 
              </h1>
          </div>
          {/* Detail */}
          <div className="flex flex-col items-center mt-10 gap-2">
            <div className='flex flex-row justify-center items-center gap-2'>
              <img src="images/games.png" className='w-5 sm:w-6' />
              <h2 className="font-2p text-blue-400 text-sm sm:text-base m-0">20 - 30 MINUTES</h2>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <img src="images/heart.png" className='w-5 sm:w-6' />
              <h2 className="font-2p text-blue-400 text-sm sm:text-base m-0">2 - 3 PEOPLE</h2>
            </div>
          </div>
          {/* Button */}
          <button 
            className="mt-10 px-2 py-1 border-2 border-blue-200 text-blue-500 bg-transparent rounded-xl font-primary
              transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-100 hover:cursor-pointer"
            onClick={onStart}>
            PRESS TO START 
          </button>
        </section>
      </div>
    <footer className='w-full flex justify-center'>
      <div className='bg-footer bg-cover bg-center w-full max-w-[1440px] h-[570px]'></div>
    </footer>
    </div>
    </div>
  ) 
}

export default CoverPage