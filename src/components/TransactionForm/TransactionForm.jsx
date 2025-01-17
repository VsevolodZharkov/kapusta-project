import { useState } from 'react';

// import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';
import styles from '../TransactionForm/TransactionForm.module.css';
import {
  addExpanses,
  getExpanses,
} from 'redux/transaction/transaction-operations';
import { useDispatch } from 'react-redux';
// import svg from '../../images/svg-icon-project/symbol-defs.svg'
// import saa from '../../images/svg-icon-project.svg'
export const TransactionForm = () => {
  // const myDate =new Date()

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();
  console.log(date);
  // const onChangeDate=(Date)=>{

  //    setDate(Date)
  // }
  const onSubmit = evt => {
    evt.preventDefault();

    dispatch(
      addExpanses({
        description: description,
        amount: amount,
        date: String(date),
        category: category,
      })
    );
    console.log(dispatch(getExpanses()));
    setDescription('');
    setCategory('');
    setAmount('');
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      default:
        return '';
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        {/* <DatePicker dateFormat='yyyy/MM/dd'  selected={date} maxDate={new Date()} onChange={date=>setDate(date)}/> */}

        <input
          max={new Date()}
          type="date"
          onChange={e => setDate(e.target.value)}
        />
        <input
          className={styles.description}
          required
          name="description"
          value={description}
          type="text"
          placeholder="Product description"
          onChange={onChange}
        />
        <div className={styles.wrapper}>
          <select
            className={styles.selected}
            required
            value={category}
            onChange={onChange}
            name="category"
            placeholder="Product category"
          >
            <option disabled hidden value="">
              Product category
            </option>
            <option className={styles.placeholder} value="Транспорт">
              Transport
            </option>
            <option className={styles.placeholder} value="Продукты">
              Products
            </option>
            <option className={styles.placeholder} value="Здоровье">
              Health
            </option>
            <option className={styles.placeholder} value="Развлечения">
              Entertainment
            </option>
            <option className={styles.placeholder} value="Всё для дома">
              Housing
            </option>
            <option className={styles.placeholder} value="Technique">
              Technique
            </option>
            <option
              className={styles.placeholder}
              value="Communal, communication"
            >
              Communal, communication
            </option>
            <option className={styles.placeholder} value="Sports, hobbies">
              Sports, hobbies
            </option>
            <option className={styles.placeholder} value="Образование">
              Education
            </option>
            <option className={styles.placeholder} value="Прочее">
              Other
            </option>
          </select>
        </div>
        {/* <svg className={styles.icon} width="15" height="10" fill='black'>
                <use href={`${svg}#icon-arrow-to-down`}  ></use>
              </svg> */}
        <input
          className={styles.amount}
          required
          name="amount"
          value={amount}
          type="text"
          placeholder="0,00"
          onChange={onChange}
        />

        <button className={styles.inputBtn} type="submit">
          INPUT
        </button>
        <button
          className={styles.clearBtn}
          type="button"
          onClick={() => {
            setDescription('');
            setCategory('');
            setAmount('');
          }}
        >
          CLEAR
        </button>
      </form>
    </>
  );
};
