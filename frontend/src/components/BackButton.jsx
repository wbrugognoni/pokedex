import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/")
  };
  return (
    <button
      type="button"
      className="btn btn-outline-dark"
      onClick={handleButton}
    >
      Back
    </button>
  );
};
