import React from 'react';
import Button from '../Button';
import style from './Form.module.scss';
import { ITask } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: '',
    time: '00:00',
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      {
        ...this.state,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    this.setState({
      task: '',
      time: '00:00',
    });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor='tarefa'>Adicione um novo estudo</label>
          <input
            type='text'
            name='tarefa'
            id='tarefa'
            value={this.state.task}
            onChange={(event) =>
              this.setState({ ...this.state, task: event.target.value })
            }
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
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            min='00:00:00'
            max='01:30:00'
            required
          />
        </div>
        <Button>Adicionar</Button>
      </form>
    );
  }
}

export default Form;
