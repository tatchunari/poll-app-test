import QuestionCard from '../components/QuestionCard'
import { questions } from '../utils/random'
// styling
import '../styles/index.css'

const QuestionPage = ({ onPick }) => {
  return (
    <div className='flex justify-center w-full overflow-x-hidden bg-gradient-to-b from-[#C7E9FF] via-[#E3F4FF] to-[#F5F5F5]'>
    <div className="w-full bg-responsive bg-no-repeat bg-contain max-w-[1440px] min-h-[1220px] flex justify-center">
      {/* Container */}
    <div className='flex flex-col my-15 items-center w-[1000px]'>

      {/* Header */} 
      <div className='flex flex-col text-center w-full max-w-[90vw] sm:max-w-[500px] mx-auto'>
      <h2 className='font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black'>SELECT YOUR TOPIC</h2>
      <p className='font-secondary text-[16px] text-black my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur fugiat nostrum id amet consectetur eveniet a quas quo quibusdam perferendis nam dignissimos molestiae culpa eligendi incidunt quos, unde aut!</p>
      </div>

      {/* Question Card */}
      <div className='grid grid-cols-1 md:grid-cols-3 max-w-[1024px] gap-4 items-center w-full mx-auto place-items-center'>
        {questions.map((q) => (
        <QuestionCard key={q.id} question={q} onSelect={onPick} />
      ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default QuestionPage;