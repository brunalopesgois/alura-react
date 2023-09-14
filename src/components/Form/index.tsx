import React, { useState } from 'react';
import Button from '../Button';
import style from './Form.module.scss';
import { ITask } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default function Form({ setTasks }: IProps) {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('00:00');
  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        task,
        time,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    setTask('');
    setTime('');
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor='tarefa'>Adicione um novo estudo</label>
        <input
          type='text'
          name='tarefa'
          id='tarefa'
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder='O que você quer estudar'
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='tempo'>Tempo</label>
        <input
          type='time'
          step='1'
          name='tempo'
          id='tempo'
          value={time}
          onChange={(event) => setTime(event.target.value)}
          min='00:00:00'
          max='01:30:00'
          required
        />
      </div>
      <Button type='submit'>Adicionar</Button>
    </form>
  );
}
