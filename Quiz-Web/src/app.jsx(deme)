import React, { useState } from "react";
import "./app.css";

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
        <h5><img width="30px" height="20px" src="data:application/octet-stream;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACoALAMBIgACEQEDEQH/xAAvAAEBAQEBAQAAAAAAAAAAAAAFBAADBgIBAAMBAQAAAAAAAAAAAAAAAAIDBAEA/9oADAMBAAIQAxAAAAL1Mk2sf3+uXPeUpCdnXh2Bi1keWlhM7aRJsqBF1DxDnnFgilHYof/EAAL/2gAMAwEAAgADAAAAIZr9uO/PPVP/xAAfEAACAgICAwEAAAAAAAAAAAABBAIDBRQAERASExX/2gAIAQEAAQcCvfWWl6PZCGp3+Qv8OI5CGoCu+szL05eCm5dcFMc93zUyvr8SpjkeuUAuOU3eBCNeZgOekbMzMeCREEpn7ssP7zve24fgyu+CJAHmYslFeMG+hWvj9WrW11OjWzj8PZKS8ocygBSt5hANi3xmwNivmLACVXj/xAAC/9oADAMBAAIAAwAAABBffc6N5TvT/8QAJxEAAwABAwMDBAMAAAAAAAAAAQIDBAAFERIxQRMUIQYiMnI0UYH/2gAIAQIBAT8Axdu2rFGBl2TIeICUe6gUiW7lWUfK8HR9DMjTHzdybPq9hSC4yl6KvkfcAF51vGFj4V5JHqUtMNSTsHabc9iV1s4dIbtYkiXtWl+1K/CgDydYe1ZO32tJqoaZWJaMyjfjYcEzJ8NoggkHvraZqNiGbx/CrWgn4pTgdLN+uvp813G+Rg0qwNT7hK92nVDz1jW9lTu+4dKBR6zDgf2O5/3X/8QAJxEAAgECBQMEAwAAAAAAAAAAAQIDBBEAEiExQQUTFBAVInE0UWH/2gAIAQMBAT8AhpaOEU0zrKyAKxkFmS/IIGotg9ueNop6o1Ds4aMRAswHO+2K6CKCRFS4ul2QkMVP6JGKEMsda+uTslPtn0AxBRy00joXUtNC6KVOz75T/fSjUe3eRb8d3bLwzW0J+sdML1MktOzkZz3A/KuvOOoW82pstvmcf//EACgQAAEDAgQFBQEAAAAAAAAAAAEAAhEDEgQQIVETIkFC4RQxUmFxMv/aAAgBAQAIPwJ7ubYLD1ZLjGnuFc7iWzdPVYirBaY19ymO5tjlVw/FpVOuyw7zTf8AHwvUt4cRP0sQ81H/AB8Klh+FSp9d82NDRZ0/MntDhZ1/MydAqmlNkhq14F9tv0ma03wHIHQ5DS90ErDmbouKjltjysQYLf5JR7HQDlGyjsyjsUb5f//EACMQAQABBAEDBQEAAAAAAAAAAAERACExURBhccFBodHh8IH/2gAIAQEAAT8hPp2CY701kFmoFvjNZnyCY1RSis1Il8ZpWvQIntx6DsRm7vUqjEv2eK8r17JqRRmT6PNeo7EY9nGaSIGoIMuERAUBJhWOIzwKugqWESRoPBXqf8L+b3UsYkDSeSpzwCOx4TWB9Nmke1YNZv3zX41+U0jnJ6DNu2aXWTtbPEghiR0vTERJY6vwRQS3u71EAJk9b8f/xAAhEAEBAAICAgEFAAAAAAAAAAABEQAhEDFR8IFBcZGh8f/aAAgBAQABPxBl2BXZenCL58CFNQdTFW17DTTbAO8uDAGKu5hwpFXZO3gBK2hJ7ECDhJpqnp8s/TCfZuZroinp8sAkEgSSwgBeEAiCJEcHmbZlRYcHzNsSIMcAAAAEA4PI+/QKrisHiWyHqWn0wV6yWgeQ9+gUTgT6wsAmmbRviI1sjyrz8203f6M2l8gArZPlDl33h6WacOTG5LUFMXIvYrROBeDJEYZjkw2hKorx/9k="></img>Accessibility</h5>
        <br></br>
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
