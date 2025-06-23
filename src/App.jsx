import React, { useState } from 'react'
import CoverPage from './pages/CoverPage'
import PollPage from './pages/PollPage'
import { getRandomQuestion } from './utils/random'
import QuestionPage from './pages/QuestionPage'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CoverPageWrapper from './wrappers/CoverPageWrapper';
import QuestionPageWrapper from './wrappers/QuestionPageWrapper';
import PollPageWrapper from './wrappers/PollPageWrapper';


const App = () => {

  // const [page, setPage] = useState("cover");

  // const handleStart = () => {
  //   setPage("question");
  // }

  const [currentQuestion, setCurrentQuestion] = useState(null);

  // const handlePick = (question) => {
  //   setCurrentQuestion(question);
  //   setPage("poll");
  // }
  // const handleRandom = () => {
  //   let newQuestion = currentQuestion;
  //   while (newQuestion.id === currentQuestion.id) {
  //     newQuestion = getRandomQuestion();
  //   }
  //   setCurrentQuestion(newQuestion);
  // };



  return (
    // <div>
    //   {page === "cover" && (
    //     <CoverPage onStart={() => setPage("question")} />
    //   )}

    //   {page === "question" && (
    //     <QuestionPage onPick={handlePick}/>
    //   )}

    //   {page === "poll" && currentQuestion && (
    //     <PollPage 
    //       question={currentQuestion}
    //       onRandom={handleRandom}
    //       onStart={() => setPage("question")}
    //     />
    //   )}
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<CoverPageWrapper />}/>
        <Route path="/question" element={<QuestionPageWrapper setCurrentQuestion={setCurrentQuestion} />}/>
        <Route 
        path="/poll"
        element={<PollPageWrapper currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>}
        />
      </Routes>
    </Router>
  )
}

export default App

