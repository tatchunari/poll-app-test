import { useNavigate } from "react-router-dom";
import QuestionPage from "../pages/QuestionPage";

const QuestionPageWrapper = ({ setCurrentQuestion }) => {
  const navigate = useNavigate();
  
  const handlePick = (question) => {
    setCurrentQuestion(question);
    navigate('/poll');
  };
  return <QuestionPage onPick={handlePick}/>;
};

export default QuestionPageWrapper;