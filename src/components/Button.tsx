// src/components/Button.tsx

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const ButtonStyled = styled.button<{ variant: 'primary' | 'secondary'; disabled: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ variant }) => (variant === 'primary' ? '#007bff' : '#6c757d')};
  color: white;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ variant, disabled }) => !disabled && (variant === 'primary' ? '#0056b3' : '#5a6268')};
  }

  &:disabled {
    background-color: #ccc;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', disabled = false }) => {
  return (
    <ButtonStyled onClick={onClick} variant={variant} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
