import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Main } from 'ui/pages/main/Main';
import { Address } from 'ui/pages/address/Address';
import style from 'styles/pagesContainer.module.scss'

export const Pages = () => {
  return (
    <div className={style.pagesContainer}>
      <Routes>
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/main' element={<Main/>} />
        <Route path='/address' element={<Address/>} />


      </Routes>

    </div>
  );
};

