import { useState } from "react";
import data from "../data.json";

function HTMLquestion() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const JSQuiz = data.quizzes.find((quiz) => quiz.title === "JavaScript");

  const currentQuestion = JSQuiz?.questions[currentIndex];
  const totalQuestions = JSQuiz?.questions.length;

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

    // aq unda daamato shemowmeba

  return (
    <>
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
    </>
  );
}

export default HTMLquestion;
