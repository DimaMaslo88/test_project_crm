import { House } from 'assets/images/House';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from 'styles/Sidebar.module.scss';
import { Search } from 'assets/images/Search';
import { Tables } from 'assets/images/Tables';
import { Calendar } from 'assets/images/Calendar';
import { GPS } from 'assets/images/GPS';
import { Widgets } from 'assets/images/Widgets';
import { Settings } from 'assets/images/Settings';
import { LogOut } from 'assets/images/LogOut';
import { Title } from 'ui/components/common/Title';
import { Arrow } from 'assets/images/Arrow';
import { Ava2 } from 'assets/images/Ava2';
import { Finance } from 'assets/images/Finance';

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openSelectHandler = () => {
    setOpen(!open);
  };
  return (
    <div className={style.sidebarContainer}>
      <div className={style.sidebarTitle}><Title title='Меню' /></div>
      <div className={style.titleContainer}>
        <House />
        <div className={style.title}><NavLink to='/main' className={style.nav}><Title
          title='Главная' /></NavLink></div>
      </div>
      <div className={style.titleContainer}>
        <Search />
        <div className={style.title}><NavLink to='/address' className={style.nav}><Title
          title='Поиск Адресов' /></NavLink></div>
      </div>
      <div className={style.titleContainer}>
        <Tables />
        <div className={style.title}><Title title='Таблицы' /></div>
      </div>
      <div className={style.titleContainer}>
        <Calendar />
        <div className={style.title}><Title title='Календарь' /></div>
      </div>
      <div className={style.titleContainer}>
        <GPS />
        <div className={style.title}><Title title='Карты' /></div>
      </div>
      <div className={style.titleContainer}>
        <Widgets />
        <div className={style.title}><Title title='Виджеты' /></div>
      </div>
      <div className={style.titleContainer}>
        <Settings />
        <div className={style.title}><Title title='Настройки' /></div>
        {!open && <div className={style.arrow}><Arrow onClick={openSelectHandler}
                                                      transform='rotate(180)' /></div>}
        {open && <div className={style.arrow}><Arrow onClick={openSelectHandler} /></div>}

      </div>

      {open ? <div className={style.select}>
          <div className={style.titleContainer}>
            <Ava2 />
            <div className={style.title}><Title title='Настройки Профиля' /></div>
          </div>
          <div className={style.titleContainer}>
            <Finance />
            <div className={style.title}><Title title='Управление финансами' /></div>
          </div>
        </div>
        : ''}
      <div className={style.titleContainer}>
        <LogOut />
        <div className={style.title}><Title title='Выход' /></div>
      </div>

    </div>
  );
};

