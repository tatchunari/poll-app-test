// styling
import "nes.css/css/nes.min.css";
import '../styles/index.css'

const CoverPage = ({ onStart }) => {
  return (
    <div 
    className="bg-responsive bg-cover bg-no-repeat bg-center h-screen w-full flex justify-center">
    <div className='flex justify-center text-center mt-[32px]'>
      <section>
        {/* Game title */}
        <div>
          <h1 className='font-primary text-5xl font-bold m-0'>SAY</h1>
          <h1 className='font-primary text-5xl font-bold m-0'>YOUR</h1>
          <h1 className='font-primary text-5xl font-bold text-yellow-400 m-0'>OPINIONS</h1>
        </div>
        {/* Detail */}
        <div className="flex flex-col items-center">
          <div className='flex flex-row justify-center items-center'>
            <i className="snes-jp-logo scale-[0.5] w-[10px]"></i>
            <h2 className="font-primary text-blue-400 m-0">20 - 30 MINUTES</h2>
          </div>
          <div className="flex flex-row justify-center items-center">
            <i className="nes-icon scale-[0.5] w-[10px] heart m-0"></i>
            <h2 className="font-primary text-blue-400 my-0 mx-[10px]">2 - 3 PEOPLE</h2>
          </div>
        </div>
        {/* Button */}
        <div 
          className="mt-4 px-0.5 py-0.5 border-2 border-blue-200 text-blue-500 bg-transparent rounded-xl font-primary"
          onClick={onStart}>
          PRESS TO START 
        </div>
      </section>
    </div>
    </div>
  ) 
}

export default CoverPage