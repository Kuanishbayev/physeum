import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css"
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import DashboardSignIn from "./pages/DashboardSignIn";
import Quiz from "./pages/quizzes/Quiz";
import TrueFalseQuiz from "./pages/quizzes/TrueFalseQuiz";
import MoreButtonsQuiz from "./pages/quizzes/MoreButtonsQuiz";
import ImageQuiz from "./pages/quizzes/ImageQuiz";
import MatchingPairWordsQuiz from "./pages/quizzes/MatchingPairWordsQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="dashboard" element={<DashboardSignIn />} />
        <Route path="registration" element={<Registration />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="true-false-quiz" element={<TrueFalseQuiz />} />
        <Route path="more-buttons-quiz" element={<MoreButtonsQuiz />} />
        <Route path="image-quiz" element={<ImageQuiz />} />
        <Route path="matching-pair-words-quiz" element={<MatchingPairWordsQuiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App