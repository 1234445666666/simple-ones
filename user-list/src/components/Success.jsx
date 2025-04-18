import React from 'react';

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60" cy="60" r="60" fill="#4CAF50" />
        <path
          d="M30 60L50 80L90 40"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};