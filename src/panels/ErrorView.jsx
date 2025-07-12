import React from 'react';
import { WebApp } from '@twa-dev/sdk';
import './css/error.css'; // Стили можно адаптировать под Telegram

const ErrorView = props => {
  // Используем методы Telegram WebApp для навигации
  const handleBack = () => {
    if (props.data.button.backEvent) {
      props.data.button.backEvent();
    } else {
      WebApp.close(); // Закрываем WebApp по умолчанию
    }
  };

  const handleAction = () => {
    if (props.data.button.event) {
      props.data.button.event();
    } else {
      WebApp.openTelegramLink('t.me/your_bot'); // Пример действия по умолчанию
    }
  };

  return (
    <div className="error-view">
      <header className="error-header">
        {props.data.button.back && (
          <button className="back-button" onClick={handleBack}>
            ←
          </button>
        )}
        <h1>Ошибка</h1>
      </header>

      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <h2>Ошибка</h2>
        <p>{props.data.desc}</p>
        
        <button 
          className="action-button" 
          onClick={handleAction}
        >
          {props.data.button.text || 'Понятно'}
        </button>
      </div>
    </div>
  );
};

export default ErrorView;