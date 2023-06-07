import React from 'react';
import style from 'styles/app.module.scss'
import './App.css';
import { Header } from 'ui/components/header/Header';
import { Sidebar } from 'ui/components/sidebar/Sidebar';
import { Pages } from 'ui/components/pages/Pages';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.mainContent}>
      <Sidebar />
      <Pages />
      </div>
    </div>
  );
}

export default App;
