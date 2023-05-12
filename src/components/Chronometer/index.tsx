import Button from '../Button';
import Timer from './Timer';
import style from './Chronometer.module.scss';

export default function Chronometer() {
  return (
    <div className={style.chronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.timerWrapper}>
        <Timer />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}
