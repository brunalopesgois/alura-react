import style from './Timer.module.scss';

interface IProps {
  time: number | undefined;
}

export default function Timer({ time = 0 }: IProps) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
  const [secondTen, secondUnit] = String(seconds).padStart(2, '0');
  return (
    <>
      <span className={style.timerNumber}>{minuteTen}</span>
      <span className={style.timerNumber}>{minuteUnit}</span>
      <span className={style.timerDiv}>:</span>
      <span className={style.timerNumber}>{secondTen}</span>
      <span className={style.timerNumber}>{secondUnit}</span>
    </>
  );
}
