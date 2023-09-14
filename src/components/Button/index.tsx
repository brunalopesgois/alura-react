import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component<{
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}> {
  render() {
    const { type = 'button', onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.customButton}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
