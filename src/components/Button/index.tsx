import React from 'react';
import style from './Button.module.scss';

interface IProps {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

export default function Button({ children, type, onClick }: IProps) {
  return (
    <button onClick={onClick} type={type} className={style.customButton}>
      {children}
    </button>
  );
}
