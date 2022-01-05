import React, { useEffect, useState } from "react";
import useHttp from './../../services/sw-services';
import classes from './AppCharacter.module.css';

const Сharacters = () => {

  const [statPick, setStatPick] = useState('')
  const [count, setCount] = useState(1);
  const [character, setCharacter] = useState({});
  const { getData, getPicture } = useHttp();

  useEffect(() => {
    async function fetchData() {
      const fetchData = await getData({ category: 'people', numberPage: count }); //якщо змінити число numberPage зміниться ім'я

      return setCharacter(fetchData);
    }
    fetchData();
  }, [getData, count]);


  useEffect(() => {
    async function fetchData() {
      const fetchData = await getPicture({ category: 'characters', numberPicture: count }); //якщо змінити число numberPage зміниться ім'я

      return setStatPick(fetchData);
    }
    fetchData();
  }, [getPicture, count]);

  const btnNext = () => {
    setCount((preState) => preState + 1)
  }

  return (
    <div className={classes.character}>
      <button className={classes.btn} onClick={btnNext}>NEXT</button>
      <img alt='star-wars' src={statPick} />
      <h3>{character.name}</h3>
      <ul className={classes.list}>
        <li>Gender: {character.gender}</li>
        <li>Birth Year{character.birth_year}</li>
        <li>Eye color{character.eye_color}</li>
      </ul>
    </div>
  )
}

export default Сharacters;