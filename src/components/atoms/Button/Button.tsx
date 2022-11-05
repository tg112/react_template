import clsx from 'clsx';
import { FC } from 'react';
import styles from './index.module.scss';

type ButtonType = {
  className?: string;
  label: string;
  color: string;
  onClick: () => {};
};

const Button: FC<ButtonType> = ({ className, label, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.root, className, styles[color])}
    >
      {label}
    </button>
  );
};

export default Button;
