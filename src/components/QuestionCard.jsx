const QuestionCard = ({ question, onSelect }) => {
  return (
      <div
        onClick={() => onSelect(question)}
        className="flex flex-col items-center justify-center cursor-pointer overflow-hidden rounded-xl bg-white border-blue-400 border-2 h-[300px] w-full max-w-[318px] hover:bg-amber-100  hover:border-amber-400 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
      >
        {/* Image */}
          <div className="bg-white mb-3 w-[90%] overflow-hidden rounded-lg">
            <img
              src={question.img}
              alt={question.text}
              className="object-contain w-full max-h-full"
            />
          </div>

       {/* Question Text */}
       <div className="text-center w-[90%] h-[50px]">
        <h3 className="font-secondary text-black font-bold text-[16px] py-3">
          {question.text}
        </h3>
      </div>
         </div>   
  )
}

export default QuestionCard;