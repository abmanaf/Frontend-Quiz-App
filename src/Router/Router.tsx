import { createBrowserRouter } from "react-router-dom";
import QuizStart from "../components/QuizStart";
import QuizQuestionsAnswers from "../components/QuizQuestionsAnswers";
import ResultsPage from "../components/ResultsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <QuizStart />,
  },
  {
    path: "quiz/:type/question/:id",
    element: <QuizQuestionsAnswers />,
  },

  {
    path: "quiz/:type/results",
    element: <ResultsPage />,
  },
]);

export default router;
