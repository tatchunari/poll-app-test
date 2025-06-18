const QuestionCard = ({ question, onSelect }) => {
  return (
      <div
        onClick={() => onSelect(question)}
        className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105"
      >
            <img
              src={question.img}
              alt={question.title}
              className="w-full h-full object-cover"
            />
         </div>   
  )
}

export default QuestionCard;