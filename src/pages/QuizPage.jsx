import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { quizQuestions } from "../data/quizData";
import logoImg from "../assets/images/logo/logo.png";
import bgImg from "../assets/images/background/bg_0.png";
import clockImg from "../assets/images/clock/clock.png";

const QuizPage = () => {
  // ============ STATE ============
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [progress, setProgress] = useState(25);
  const [timeLeft, setTimeLeft] = useState(300);

  const navigate = useNavigate();
  const totalQuestions = quizQuestions.length;
  const currentData = quizQuestions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];

  // ============ TIMER COUNTDOWN ============
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // ============ HANDLE SELECT ANSWER ============
  const handleSelectAnswer = (index) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: index,
    });
  };

  // ============ NAVIGATION ============
  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Update progress
      const newProgress = ((currentQuestion + 2) / totalQuestions) * 100;
      setProgress(newProgress);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Update progress
      const newProgress = (currentQuestion / totalQuestions) * 100;
      setProgress(newProgress);
    }
  };

  // ============ SUBMIT QUIZ ============
  const handleSubmit = () => {
    // Calculate score
    let score = 0;
    Object.keys(selectedAnswers).forEach((qIndex) => {
      const answerIndex = selectedAnswers[qIndex];
      const correctIndex = quizQuestions[qIndex].correctAnswer;
      if (answerIndex === correctIndex) {
        score++;
      }
    });

    // Navigate to results page with score
    navigate("/quiz/results", {
      state: {
        score,
        total: totalQuestions,
        percentage: (score / totalQuestions) * 100,
      },
    });
  };

  // ============ RENDER ============
  return (
    <div className="wrapper overflow-hidden position-relative">
      <div
        style={{
          width: "100%",
          paddingRight: "var(--bs-gutter-x, 0.75rem)",
          paddingLeft: "var(--bs-gutter-x, 0.75rem)",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "-0.75rem",
            marginRight: "-0.75rem",
          }}
        >
          {/* ========== LEFT SIDEBAR ========== */}
          <div className="col-lg-4">
            <div className="steps_area step_area_fixed">
              {/* Logo */}
              <div className="form_logo position-absolute ps-5 pt-5">
                <img className="d-none d-lg-block" src={logoImg} alt="logo" />
              </div>

              {/* Background Image */}
              <div className="image_holder">
                <img
                  className="overflow-hidden d-none d-lg-block"
                  src={bgImg}
                  alt="background"
                />
              </div>

              {/* Navigation Buttons */}
              <div className="form_btn position-absolute z-3">
                <a
                  className="prev_btn border-0 text-uppercase overflow-hidden rounded-pill text-white me-3 d-inline-flex align-items-center"
                  style={{
                    display: currentQuestion === 0 ? "none" : "inline-flex",
                  }}
                  onClick={handlePrev}
                  role="button"
                >
                  <span>
                    <i className="fas fa-arrow-left rounded-pill"></i>
                  </span>
                  Last Question
                </a>

                <a
                  className="next_btn border-0 text-uppercase overflow-hidden rounded-pill text-white d-inline-flex align-items-center"
                  onClick={handleNext}
                  role="button"
                >
                  {currentQuestion === totalQuestions - 1 ? (
                    "Submit"
                  ) : (
                    <>
                      Next Question
                      <span>
                        <i className="fas fa-arrow-right rounded-pill"></i>
                      </span>
                    </>
                  )}
                </a>
              </div>
            </div>
          </div>

          {/* ========== RIGHT CONTENT ========== */}
          <div className="col-lg-8 pt-5 form_wrapper overflow-hidden">
            {/* Timer */}
            <div className="step_content text-center pt-3">
              <div className="count_clock">
                <img src={clockImg} alt="clock" />
              </div>
              <div className="count_number countdown_timer pt-1">
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>

            {/* Question */}
            <div className="form_content">
              <div className="question_title py-5 text-white">
                <h1 className="text-center text-uppercase overflow-hidden rounded-pill">
                  {currentData.question}
                </h1>
              </div>

              {/* Options */}
              <div className="row text-center form_items">
                {currentData.options.map((option, index) => (
                  <div key={index} className="col-md-6 py-3">
                    <label
                      className={`bg-white overflow-hidden rounded-pill text-center ${
                        selectedAnswer === index ? "active" : ""
                      }`}
                      onClick={() => handleSelectAnswer(index)}
                    >
                      {option}
                      <input
                        type="radio"
                        name={`question_${currentQuestion}`}
                        value={option}
                        checked={selectedAnswer === index}
                        onChange={() => {}}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="row justify-content-center align-items-center pt-5">
              <div className="col-md-8">
                {/* Progress */}
                <div className="step_progress_bar">
                  <div className="progress rounded-pill">
                    <div
                      className="progress-bar rounded-pill overflow-hidden"
                      role="progressbar"
                      style={{ width: `${progress}%` }}
                      aria-valuenow={progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {Math.round(progress)}%
                    </div>
                  </div>
                </div>

                {/* Steps */}
                <div className="steps_number d-flex justify-content-around">
                  {quizQuestions.map((_, index) => (
                    <div
                      key={index}
                      className="step d-flex flex-column align-items-center position-relative text-center"
                    >
                      <span
                        className={`text-white position-absolute rounded-pill ${
                          index <= currentQuestion ? "active" : ""
                        } ${index < currentQuestion ? "finish" : ""}`}
                      >
                        {index + 1}
                      </span>
                      <p
                        className={`pt-4 ${
                          index <= currentQuestion ? "active" : ""
                        } ${index < currentQuestion ? "finish" : ""}`}
                      >
                        Question
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
