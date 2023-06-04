import React from 'react';
import style from 'styles/Header.module.scss';
import { Vector } from 'assets/images/Vector';

export const Header = () => {
  return (
    <div className={style.header}>
      <Vector />
      <h4 className={style.title}>Wrench CRM</h4>
    </div>
  );
};

