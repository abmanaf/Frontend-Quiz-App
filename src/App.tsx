import MainContainer from "./components/MainContainer";
import { QuizProvider } from "./context/QuizContext";
import MainStyle from "./styles/MainStyle";

function App() {
  return (
    <>
      <MainStyle />
      <QuizProvider>
        <MainContainer />
      </QuizProvider>
    </>
  );
}

export default App;