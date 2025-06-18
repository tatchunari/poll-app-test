import QuestionCard from '../components/QuestionCard'
import { questions } from '../utils/random'

const QuestionPage = ({ onPick }) => {
  return (
    <div className="p-4">
      <h2 className='text-xl font-bold mt-9 mb-4 text-center'>Select a Question!</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center'>
        {questions.map((q) => (
        <QuestionCard key={q.id} question={q} onSelect={onPick} />
      ))}
      </div>
    </div>
  )
}

export default QuestionPage;