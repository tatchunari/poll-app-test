import { useState } from 'react';
import RandomButton from '../components/RandomButton';

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
    <div className='flex items-center justify-center'>
      <div className='card bg-base-300 text-primary-content flex flex-col items-center mt-10 w-[90vw] max-w-[800px] min-h-[60vh] p-6 rounded-2xl shadow-xl'>
        <h2 className='text-2xl my-10'>{question.text}</h2>
        <img 
          src={question.pollImg}
          alt="Poll Image"
          className='max-w-md w-full h-auto mb-6 rounded shadow'
        />
        <div className='button-container mt-5 grid grid-cols-2 gap-3'>

         <button 
        onClick={handleYesVote}
        className='btn btn-success w-30'>YES</button>

        <button 
        onClick={handleNoVote}
        className='btn btn-error w-30'>NO</button>

        <p className='text-center'>{yesVote}</p>
        <p className='text-center'>{noVote}</p>

        <button onClick={onStart}
        className='btn btn-info w-30'>
          Restart
        </button>

        <RandomButton 
        onRandom={onRandom}/>
        </div>
      </div>
    </div>
  )
}

export default PollPage;