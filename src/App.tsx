import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';
import { useAppSelector } from './hooks/redux';

const App = () =>  {
  const { items } = useAppSelector(state => state.todo)
  



  return (
    <Background>  
      <Header/>
      <ToDoList items={items}/>
    </Background>
  );
}

export default App;
