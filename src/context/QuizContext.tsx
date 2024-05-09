import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
  KeyboardEvent,
  MutableRefObject,
} from "react";
import { NavigateFunction } from "react-router-dom";
import data from "../data/data.json";
import { useLocalStorageState } from "../hooks/useLocalStorage";

interface QuizContextProps {
  handleStartQuiz: () => void;
  qNumber: number;
  answerPicked: string;
  handleAnswer: (answer: string, id: number | undefined) => void;
  checkAnswer: (
    correctAnswer: string | undefined,
    id: number | undefined
  ) => void;
  nextQuestion: number[];
  handleNextQuestion: () => void;
  correctAnswersCount: number;
  handlePlayAgain: () => void;
  error: boolean;
  setQnumber: Dispatch<SetStateAction<number>>;
  allAnswers: AllAnswersState;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  handleKeyDownSelectQuiz: (
    event: KeyboardEvent<HTMLDivElement>,
    nav: NavigateFunction
  ) => void;
  selectedQuizArrow: number;
  handleSelectAnswer: (
    event: KeyboardEvent<HTMLButtonElement>,
    answer: string,
    id: number,
    index: number,
    answers: string[],
    answerRefs: MutableRefObject<(HTMLButtonElement | null)[]>,
    correctAnswer: string
  ) => void;
  keyNextBtn: (
    event: KeyboardEvent<HTMLButtonElement>,
    nav: NavigateFunction,
    type: string | undefined
  ) => void;
  handleKeyResults: (
    event: KeyboardEvent<HTMLButtonElement>,
    type: string | undefined,
    nav: NavigateFunction
  ) => void;
  handleKeyPlayAgain: (
    event: KeyboardEvent<HTMLButtonElement>,
    nav: NavigateFunction
  ) => void;
}

type QuizProviderProps = {
  children: ReactNode;
};

interface AllAnswersState {
  [key: string]: string;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

function QuizProvider({ children }: QuizProviderProps) {
  const [qNumber, setQnumber] = useLocalStorageState<number>(
    1,
    "questionNumber"
  );
  const [answerPicked, setAnswerPicked] = useLocalStorageState<string>(
    "",
    "answerPicked"
  );
  const [allAnswers, setAllAnswers] = useLocalStorageState<AllAnswersState>(
    {},
    "allAnswersPicked"
  );
  const [nextQuestion, setNextQuestion] = useLocalStorageState<number[]>(
    [],
    "questionsAnswered"
  );
  const [error, setError] = useState<boolean>(false);
  const [correctAnswersCount, setCorrectAnswersCount] =
    useLocalStorageState<number>(0, "scoreCount");
  const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
    false,
    "isDarkMode"
  );
  const [selectedQuizArrow, setSelectedQuizArrow] =
    useLocalStorageState<number>(0, "selectedQuizByArrow");
  const { quizzes } = data;

  const handleStartQuiz = () => {
    setQnumber(1);
    setAnswerPicked("");
    setAllAnswers({});
    setNextQuestion([]);
    setError(false);
    setCorrectAnswersCount(0);
  };

  const handleAnswer = (answer: string, id: number | undefined) => {
    if (!nextQuestion.includes(id ? id : 0)) {
      setAnswerPicked(answer);
      setAllAnswers((prev) => ({ ...prev, [id ? id : 0]: answer }));

      setError(false);
    }
  };

  const checkAnswer = (
    correctAnswer: string | undefined,
    id: number | undefined
  ) => {
    if (nextQuestion.includes(id ? id : 0)) {
      return;
    } else {
      if (answerPicked === "") {
        setError(true);
      } else {
        setNextQuestion((prev) => [...prev, id ? id : 0]);
        if (qNumber < 10) {
          setQnumber((prev) => prev + 1);
        }
      }
      if (correctAnswer === answerPicked) {
        setCorrectAnswersCount((prev) => prev + 1);
      }

      if (!correctAnswer) {
        throw new Error("Object doesn't have the correct answer");
      }
    }
  };

  const handleNextQuestion = () => {
    setAnswerPicked("");
  };

  const handlePlayAgain = () => {
    setCorrectAnswersCount(0);
    setAnswerPicked("");
    setNextQuestion([]);
    setQnumber(1);
    setAllAnswers({});
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleKeyDownSelectQuiz = (
    event: KeyboardEvent<HTMLDivElement>,
    nav: NavigateFunction
  ) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedQuizArrow((prev) =>
        prev > 0 ? prev - 1 : quizzes.length - 1
      );
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedQuizArrow((prev) =>
        prev < quizzes.length - 1 ? prev + 1 : 0
      );
    }

    if (event.key === "Enter") {
      const selectedQuiz = quizzes[selectedQuizArrow];
      if (selectedQuiz) {
        nav(`/quiz/${selectedQuiz.title}/question/1`);
        handleStartQuiz();
      }
    }
  };

  const handleAnswerArrows = (
    event: KeyboardEvent<HTMLButtonElement>,
    answerRefs: MutableRefObject<(HTMLButtonElement | null)[]>,
    index: number,
    answer: string,
    id: number
  ) => {
    event.preventDefault();
    answerRefs.current[index]?.focus();
    handleAnswer(answer, id);
  };

  const handleSelectAnswer = (
    event: KeyboardEvent<HTMLButtonElement>,
    answer: string,
    id: number,
    index: number,
    answers: string[],
    answerRefs: MutableRefObject<(HTMLButtonElement | null)[]>,
    correctAnswer: string
  ) => {
    switch (event.key) {
      case "Enter":
        event.preventDefault();
        checkAnswer(correctAnswer, id);
        break;

      case "ArrowUp":
        const prevIndex = index > 0 ? index - 1 : answers.length - 1;
        handleAnswerArrows(event, answerRefs, prevIndex, answer, id);

        break;

      case "ArrowDown":
        const nextIndex = index < answers.length - 1 ? index + 1 : 0;
        handleAnswerArrows(event, answerRefs, nextIndex, answer, id);

        break;

      default:
        break;
    }
  };

  const keyNextBtn = (
    event: KeyboardEvent<HTMLButtonElement>,
    nav: NavigateFunction,
    type: string | undefined
  ) => {
    if (event.key === "Enter") {
      console.log("enter", type, qNumber);
      nav(`/quiz/${type}/question/${qNumber}`);
      handleNextQuestion();
    }
  };

  const handleKeyResults = (
    event: KeyboardEvent<HTMLButtonElement>,
    type: string | undefined,
    nav: NavigateFunction
  ) => {
    if (event.key === "Enter") {
      console.log("results");
      nav(`/quiz/${type}/question/results`);
    }
  };

  const handleKeyPlayAgain = (
    event: KeyboardEvent<HTMLButtonElement>,
    nav: NavigateFunction
  ) => {
    if (event.key === "Enter") {
      nav(`/`);
      handlePlayAgain();
    }
  };

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  const contextValue: QuizContextProps = {
    handleStartQuiz,
    qNumber,
    answerPicked,
    handleAnswer,
    checkAnswer,
    nextQuestion,
    handleNextQuestion,
    correctAnswersCount,
    handlePlayAgain,
    error,
    setQnumber,
    allAnswers,
    toggleDarkMode,
    isDarkMode,
    handleKeyDownSelectQuiz,
    selectedQuizArrow,
    handleSelectAnswer,
    keyNextBtn,
    handleKeyResults,
    handleKeyPlayAgain,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
