import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { getQuestionByCategory } from "./data";

const resultInitialEstate = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

export function SinglePageQuestion() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialEstate);
  const [showResult, setShowResult] = useState(false);
  const { title } = useParams();

  const categoryType = getQuestionByCategory(title);

  const { question, options, answer } = categoryType.questions[currentQuestion];

  const onAnswerClick = (chosenAnswer, index) => {
    setAnswerIndex(index);
    if (chosenAnswer === answer) {
      setChosenAnswer(true);
    } else {
      setChosenAnswer(false);
    }
  };
  const onClickNext = () => {
    setAnswerIndex(null);
    setResult((prev) =>
      chosenAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (currentQuestion !== categoryType.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  const onTryAgain = () => {
    setResult(resultInitialEstate);
    setShowResult(false);
  };
  return (
    <div class="question-card">
      {!showResult ? (
        <>
          <h1>{title}</h1>
          <span className="question-card__active-question-number">
            Questions {currentQuestion + 1} of {categoryType.questions.length}
          </span>
          <h2>{question}</h2>
          <ul className="question-card__answer-list">
            {options.map((chosenAnswer, index) => (
              <li
                onClick={() => onAnswerClick(chosenAnswer, index)}
                key={chosenAnswer}
                className={
                  answerIndex === index
                    ? "question-card__selected-answer"
                    : null
                }
              >
                {chosenAnswer}
              </li>
            ))}
            <button
              className="question-card__submit-button"
              onClick={onClickNext}
              disabled={answerIndex === null}
            >
              {currentQuestion === categoryType.questions.length - 1
                ? "Finish"
                : "Submit Answer"}
            </button>
          </ul>
        </>
      ) : (
        <div className="question-card__result">
          <h1> Quiz Completed </h1>
          <h2> You scored...</h2>
          <p className="question-card__correct-answers">
            {result.correctAnswers}
          </p>
          <p className="question-card__number-questions">
            out of {categoryType.questions.length}
          </p>
          <button
            className="question-card__btn-play-again"
            onClick={onTryAgain}
          >
            Play Again{" "}
          </button>
        </div>
      )}
    </div>
  );
}
