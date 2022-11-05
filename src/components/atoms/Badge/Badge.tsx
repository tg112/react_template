import { FC } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

type Badge = {
  className?: string;
  label?: string;
  color: string;
  priority?: '高' | '中' | '低';
};

const Button: FC<Badge> = ({ className, label, priority, color }) => {
  console.log(styles);
  return priority ? (
    <div
      className={clsx(className, styles.root, styles.priority, styles[color])}
    >
      <span>重要度</span>
      <span>{priority}</span>
    </div>
  ) : (
    <div className={clsx(styles.root, className, styles[color])}>{label}</div>
  );
};

export default Button;
