/* eslint-disable linebreak-style */
import React from 'react';
import InputTodo from './InputTodo';
import Header from './Header';

const TodosList = () => (
  <>
    <Header />
    <div className="Main-div">
      <div className="Child-div">
        <h1>Todo List by React</h1>
        <figcaption>Add your list here!</figcaption>
      </div>
      <InputTodo />
    </div>
  </>
);

export default TodosList;
