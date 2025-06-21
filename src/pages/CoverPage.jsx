import React from 'react'

const CoverPage = ({ onStart }) => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <section className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold mb-4'>Game Name</h1>

        <button 
        className='bg-blue-500 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded cursor-pointer ' onClick={onStart}>
          Start 
        </button>
      </section>
    </div>
  ) 
}

export default CoverPage