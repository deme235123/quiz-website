import { useState } from "react";
import data from "../data.json";
import { useLocation } from "react-router-dom";

function Question() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  const quizMap = {
    "/Html-questions": "HTML",
    "/CSS-questions": "CSS",
    "/Javascript-questions": "JavaScript",
    "/Accesebility-questions": "Accessibility"
  };

  const currentQuizTitle = quizMap[location.pathname];
  const activeQuiz = data.quizzes.find((quiz) => quiz.title === currentQuizTitle);

  const currentQuestion = activeQuiz.questions[currentIndex];
  const totalQuestions = activeQuiz.questions.length;

  const handleNext = () => { //გადასვლა და შემოწმება აქ უნდა დაამატოთ
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="Question-Page">
      <div className="Qleft-side">
        <div className="Qleft-top">
          <span className="outOf">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <h2>{currentQuestion.question}</h2>
        </div>

        <div className="slide-bar">
          <div
            style={{
              width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="Qright-side">
        <div className="option">
          {currentQuestion.options.map((opt, i) => (
            <div key={i} className="option-item">
              <div className="letter-box">{String.fromCharCode(65 + i)}</div>
              <span>{opt}</span>
            </div>
          ))}
        </div>

        <button className="next-btn" onClick={handleNext}>
          {currentIndex === totalQuestions - 1
            ? "Finish Quiz"
            : "Submit Answer"}
        </button>
      </div>
    </div>
  );
}

export default Question;