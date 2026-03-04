import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./components/Header.css";
import "./components/Start-menu.css";
import "./components/Question.css";
import Header from "./components/header"
import HTMLquestion from "./components/HTML-Questions";
import StartMenu from "./components/Start-menu";
import AccesebilityQuestion from './components/Accesebility-Question';
import CSSQuestion from './components/CSS-Questions'
import JSQuestion from './components/Javascript-Questions'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StartMenu />} />
        <Route path="/Html-questions" element={<HTMLquestion />} />
        <Route path='/Accesebility-questions' element={<AccesebilityQuestion />} />
        <Route path='/CSS-questions' element={<CSSQuestion />} />
        <Route path='/Javascript-questions' element={<JSQuestion />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
