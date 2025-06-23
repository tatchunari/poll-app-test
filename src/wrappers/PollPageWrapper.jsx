import PollPage from "../pages/PollPage";
import { useNavigate } from "react-router-dom";
import { getRandomQuestion } from "../utils/random";

const PollPageWrapper = ({ currentQuestion, setCurrentQuestion }) => {
  const navigate = useNavigate();

  const handleRandom = () => {
    let newQuestion = currentQuestion;
    while (newQuestion.id === currentQuestion.id) {
      newQuestion = getRandomQuestion();
    }
    setCurrentQuestion(newQuestion);
  };

  return (
    <PollPage
    question={currentQuestion}
    onRandom={handleRandom}
    onStart={() => navigate('/question')}
    />
  );
};

export default PollPageWrapper;
