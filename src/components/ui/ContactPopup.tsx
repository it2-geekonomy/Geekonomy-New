'use client';
import React from 'react';

interface PopupProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  popupKey: number;
}

const Popup: React.FC<PopupProps> = ({ message, type, onClose, popupKey }) => {
  return (
    <div key={popupKey} className="popup-container">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center gap-4">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-lg ${
              type === 'error' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
            }`}
            style={{ fontWeight: 'bold' }}
          >
            {type === 'error' ? '!' : '✓'}
          </div>
          <span className="text-black text-sm font-medium">{message}</span>
          <button
            onClick={onClose}
            className="text-black hover:text-gray-600 font-bold text-lg"
          >
            ×
          </button>
        </div>
      </div>
      <div className={`popup-timer-line ${type}`} />
    </div>
  );
};

export default Popup;
