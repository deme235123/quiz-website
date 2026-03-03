import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./components/Header.css";
import "./components/Start-menu.css";
import "./components/Question.css";
import Header from "./components/header"
import Question from "./components/Question";
import StartMenu from "./components/Start-menu";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StartMenu />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
