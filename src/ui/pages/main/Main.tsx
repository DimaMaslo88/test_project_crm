import React from 'react';
import style from 'styles/MainPage.module.scss';
import { NewsText } from 'ui/components/newsText/NewsText';
import { Title } from 'ui/components/common/Title';
import s from 'styles/addressPage.module.scss';

export const Main = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.title}>
        <Title title='Новости' />
      </div>
      <div className={s.title2}>
        <Title title='Обновление CRM до 1,2' />
      </div>
      <NewsText />

    </div>
  );
};




