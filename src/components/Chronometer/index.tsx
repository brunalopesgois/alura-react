import Button from '../Button';
import Timer from './Timer';
import style from './Chronometer.module.scss';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';

interface IProps {
  selected: ITask | undefined;
}

export default function Chronometer({ selected }: IProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.chronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.timerWrapper}>
        <Timer time={time} />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}
