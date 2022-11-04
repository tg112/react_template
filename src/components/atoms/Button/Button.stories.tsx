import Button from './Button';

export default {
  title: 'Button',
  component: Button
};

const onClickBtn = () => {
  console.log('clicked');
};

export const Buttons = () => (
  <>
    <Button onClick={() => onClickBtn} label="保存する" color="blue" />
    <br />
    <Button onClick={() => onClickBtn} label="閉じる" color="gray" />
  </>
);
