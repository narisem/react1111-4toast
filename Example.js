import { useState } from "react";
import { createPortal } from "react-dom" 

import Toast from "./components/Toast";

const ToastPortal = ({ children }) => {
  const target = document.querySelector(".container.start");
  return createPortal(children, target);
};

const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div>
      <h3>
        토스트 제작 과제（createPortal）
      </h3>
      <p>버튼 이벤트시 토스트를 보이게 만들어 보세요.</p>

      <div className="container start"></div>
      
      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        토스트 보여주기
      </button>
      {toastOpen && 
      (
        <ToastPortal>
          <Toast
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}
          />
          </ToastPortal>
      )}
    </div>
  );
};

export default Example;
