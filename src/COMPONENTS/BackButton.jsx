import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr;Back
      </button>
    </div>
  );
}

export default BackButton;
