import React, { useState } from 'react';

interface ErrorOverlayProps {
  message: string;
  details?: string;
  onClose: () => void;
}

const ErrorOverlay: React.FC<ErrorOverlayProps> = ({ message, details, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
        <p className="mb-4">{message}</p>
        {details && (
          <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto max-h-40">
            {details}
          </pre>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorOverlay;
