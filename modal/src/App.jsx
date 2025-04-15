import React, { useState } from "react";
import "./App.css";
import "./Modal.css";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="App">
        <button onClick={() => setOpen(true)} className="open-modal-btn">
          Открыть модальное окно
        </button>
        {open && (
          <div className="overlay fade-in">
            <div className="modal">
              <h1>Модальное окно открыто</h1>
              <button
                onClick={() => setOpen(false)}
                className="close-modal-btn"
              >
                Закрыть модальное окно
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
