import React, { useState } from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Signup from './component/signup';
import Book from './component/book';
import History from './component/history';
import Login from './component/login'
import Keyword from './component/keyword';
import './App.css'

function App() {
   
  const logout = () =>{
    localStorage.removeItem("userId")
    window.location.href ="/"
  }
    return (

    <div className="App">
    <BrowserRouter>
          <header>
              <Link to ="/book">
                  <button>도서 검색</button>  
              </Link> 
              <Link to ="/history">
                  <button>내 검색 히스토리</button>
              </Link>
              <Link to ="/keyword">
                  <button>인기 키워드 목록</button>
              </Link>
        {localStorage.getItem("userId") && <button onClick={logout}>로그아웃</button>}
          </header>
          <Routes>
              <Route path="/" element = {<Login/>}/>
              <Route path="/signup" element = {<Signup/>}/>
              <Route path="/book" element = {<Book/>}/>
              <Route path="/history" element = {<History/>}/>
              <Route path="/keyword" element = {<Keyword/>}/>
          </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
