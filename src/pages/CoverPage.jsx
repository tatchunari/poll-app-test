// styling
import '../styles/index.css'

const CoverPage = ({ onStart }) => {
  return (
    <div 
    className="bg-responsive bg-cover bg-no-repeat bg-center h-screen w-full flex justify-center">
    <div className='flex justify-center w-full px-4 sm:px-6 md:px-10 lg:px-20 mt-10'>
      <div className='flex justify-center text-center w-full max-w-screen-md'>
        <section className='w-full'>
          {/* Game title */}
          <div>
            <h1 className='font-primary text-5xl font-bold m-0'>SAY</h1>
            <h1 className='font-primary text-5xl font-bold m-0'>YOUR</h1>
            <h1 className='font-primary text-5xl font-bold text-yellow-400 m-0'>OPINIONS</h1>
          </div>
          {/* Detail */}
          <div className="flex flex-col items-center mt-5 gap-2">
            <div className='flex flex-row justify-center items-center gap-2'>
              <img src="images/games.png" className='w-5 sm:w-6' />
              <h2 className="font-primary text-blue-400 text-sm sm:text-base m-0">20 - 30 MINUTES</h2>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <img src="images/heart.png" className='w-5 sm:w-6' />
              <h2 className="font-primary text-blue-400 text-sm sm:text-base m-0">2 - 3 PEOPLE</h2>
            </div>
          </div>
          {/* Button */}
          <button 
            className="mt-4 px-2 py-1 border-2 border-blue-200 text-blue-500 bg-transparent rounded-xl font-primary
              transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-100 hover:cursor-pointer"
            onClick={onStart}>
            PRESS TO START 
          </button>
        </section>
      </div>
    </div>
    </div>
  ) 
}

export default CoverPage