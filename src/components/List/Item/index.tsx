import { ITask } from '../../../types/task';
import style from './Item.module.scss';

interface IProps extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item(props: IProps) {
  const { task, time, selected, completed, id, selectTask } = props;
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ''} ${
        completed ? style.completedItem : ''
      }`}
      onClick={() =>
        !completed &&
        selectTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.completed} aria-label='tarefa completada'></span>
      )}
    </li>
  );
}
