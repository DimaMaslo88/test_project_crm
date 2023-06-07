import React from 'react';
import style from 'styles/Header.module.scss';
import { Vector } from 'assets/images/Vector';
import { Avatar } from 'assets/images/Avatar';

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
      <Vector />
      <h4 className={style.title}>Wrench CRM</h4>
      </div>
      <div className={style.user}>
      <Avatar fill='#ffffff'/>
      <h3 className={style.title}>Имя Фамилия</h3>
      </div>
    </div>
  );
};

