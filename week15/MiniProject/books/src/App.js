import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Book from './Components/Book';
import BookList from './Components/BookList';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([])


  return (
    <>
    <Header/>
    <Book list={list} setList={setList}/>
    <BookList list={list}/>
    </>
  );
}

export default App;
