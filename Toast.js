import "./Toast.css";

const Toast = ({ visible, handleCloseClick }) => {
  const toastClassName = visible ? "toast is-visible" : "toast";
  return (
    <div className={toastClassName}>
      <div className="toast__content">
        <p>토스트</p>
        <button
          type="button"
          className="toast__button"
          onClick={handleCloseClick}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
