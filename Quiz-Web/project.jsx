// App.jsx
import React, { useState } from "react";

const questions = [
  {
    question: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
    options: [
      { label: "4.5 : 1", isCorrect: true },
      { label: "3 : 1", isCorrect: false },
      { label: "2.5 : 1", isCorrect: false },
      { label: "5 : 1", isCorrect: false },
    ],
  },
  {
    question: "What is the recommended minimum font size for body text for accessibility?",
    options: [
      { label: "10px", isCorrect: false },
      { label: "12px", isCorrect: false },
      { label: "16px", isCorrect: true },
      { label: "18px", isCorrect: false },
    ],
  },
  {
    question: "Which of these is an example of a semantic HTML element?",
    options: [
      { label: "<div>", isCorrect: false },
      { label: "<span>", isCorrect: false },
      { label: "<header>", isCorrect: true },
      { label: "<b>", isCorrect: false },
    ],
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [error, setError] = useState("");

  const question = questions[currentQuestion];

  const handleSubmit = () => {
    if (selectedOption === null) {
      setError("Please select an answer");
      return;
    }
    setError("");
    setShowFeedback(true);
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h5><img width="20px" height="20px" src="data:image/png;base64,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"></img>Accessibility</h5>
        <br></br>

        <h3>
          Question {currentQuestion + 1} of {questions.length}
        </h3>

        <div className="quiz-split">
          {/* Question */}
          <div className="quiz-question">
            <p>{question.question}</p>
          </div>

          {/* Options */}
          <div className="quiz-options">
            {question.options.map((option, index) => {
              let classNames = "quiz-option";
              if (showFeedback) {
                if (index === selectedOption) {
                  classNames += option.isCorrect ? " correct" : " incorrect";
                } else if (option.isCorrect) {
                  classNames += " correct";
                }
              }

              return (
                <div
                  key={index}
                  className={classNames}
                  onClick={() => !showFeedback && setSelectedOption(index)}
                >
                  {option.label}
                  {showFeedback && index === selectedOption && option.isCorrect && <span>✔️</span>}
                  {showFeedback && index === selectedOption && !option.isCorrect && <span>❌</span>}
                  {showFeedback && index !== selectedOption && option.isCorrect && <span>✔️</span>}
                </div>
              );
            })}
          </div>
        </div>

        {error && <p className="quiz-error">{error}</p>}

        {!showFeedback ? (
          <button className="quiz-button" onClick={handleSubmit}>
            Submit Answer
          </button>
        ) : (
          <button className="quiz-button" onClick={handleNext}>
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}
