const QuestionCard = ({ question, onSelect }) => {
  return (
      <div
        onClick={() => onSelect(question)}
        className="flex flex-col items-center justify-center cursor-pointer overflow-hidden rounded-xl bg-white border-blue-400 border-2 hover:bg-amber-100  hover:border-amber-400 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
      >
        {/* Image */}
          <div className="bg-white w-[90%] h-40 mb-3 overflow-hidden rounded-lg mt-3">
            <img
              src={question.img}
              alt={question.text}
              className="w-full h-full object-cover"
            />
          </div>

       {/* Question Text */}
       <div className=" text-center w-[90%]">
        <h3 className="font-secondary text-black font-bold text-[12px] pb-4">
          {question.text}
        </h3>
      </div>
         </div>   
  )
}

export default QuestionCard;