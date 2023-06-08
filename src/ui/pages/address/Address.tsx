import React, { ChangeEvent, useState } from 'react';
import { Title } from 'ui/components/common/Title';
import style from 'styles/addressPage.module.scss';
import { Search } from 'assets/images/Search';
import { instance, settings } from 'api/instance';
import { AddressResponseType } from 'api/types/types';


export const Address = () => {
  const [addresses, setAddresses] = useState<AddressResponseType[]>([]);
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('Не может быть пустым');
  const [errorValue, setErrorValue] = useState<boolean>(false);

  const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === 'search') {
      setErrorValue(true);
    }
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    if (value.length < 3) {
      setError('Минимальная длина 3 символа');
    } else {
      setError('');
    }

  };
  const setAddressesHandler = () => {
// запрос на сервер за  адресами
    instance.post('suggest/address', JSON.stringify({ query: value }), settings)
      .then(res => setAddresses(res.data.suggestions))
      .catch(res => console.log(res.error));
  };

  return (
    <div className={style.addressContainer}>
      <div className={style.title}>
        <Title title='Поиск адресов' />
      </div>
      <div className={style.title2}>
        <Title title='Введите интересующий вас адрес' />
      </div>
      {(errorValue && error) && <div style={{ color: 'red' }}>{error}</div>}
      <div className={style.inputContainer}>
        <input
          placeholder='Введите интересующий вас адрес'
          name='search'
          className={style.input}
          value={value}
          onChange={onChangeHandler}
          onBlur={blurHandler}
        />
        <button className={style.button} onClick={setAddressesHandler}>
          <span className={style.buttonItem}><Search fill='#FFFFFF' /> Поиск</span>
        </button>
      </div>

      {addresses.length > 0 && <div className={style.address}>
        <ul className={style.title}>
          <Title title='Адреса' />
        </ul>
        <div>
          {addresses.map((address) => {
            return <ul key={address.fias_id} className={style.texts}>
              <li className={style.li}>
                <a href='https://dadata.ru/product/index-by-address/'
                   className={style.a}
                >
                  {address.unrestricted_value}
                </a>
              </li>

            </ul>;
          })}
        </div>
      </div>
      }


    </div>
  );
};


