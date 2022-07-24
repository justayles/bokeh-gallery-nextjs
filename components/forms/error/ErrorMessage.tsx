import React from 'react';

export interface IErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ children }) => {
  return (
    <span role="alert" aria-label="error" className="block text-red-800 p-2">
      {children}
    </span>
  );
};

export default ErrorMessage;
