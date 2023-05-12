import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Chronometer from '../components/Chronometer';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Chronometer />
    </div>
  );
}

export default App;
