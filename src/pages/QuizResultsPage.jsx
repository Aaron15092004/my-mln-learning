import { useLocation, useNavigate } from "react-router-dom";

const QuizResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total, percentage } = location.state || {
    score: 0,
    total: 0,
    percentage: 0,
  };

  return (
    <div className="wrapper overflow-hidden position-relative">
      <div className="container text-center py-5">
        <h1 className="text-white">Quiz Completed!</h1>
        <div className="result-card bg-white p-5 rounded my-5">
          <h2>Your Score</h2>
          <h1 className="display-1">
            {score}/{total}
          </h1>
          <p className="lead">{percentage.toFixed(1)}%</p>

          {percentage >= 70 ? (
            <p className="text-success">🎉 Excellent! You passed!</p>
          ) : (
            <p className="text-warning">📚 Keep practicing!</p>
          )}

          <div className="mt-4">
            <button
              className="btn btn-primary mx-2"
              onClick={() => navigate("/quiz")}
            >
              Retry Quiz
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResultsPage;
