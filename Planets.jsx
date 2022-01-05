import React, { useEffect, useState } from "react";
import useHttp from './../../services/sw-services';
import classes from './../Characters/AppCharacter.module.css';


const Planets = () => {

  const [statPick, setStatPick] = useState('')
  const [count, setCount] = useState(2);
  const [planet, setPlanet] = useState({});
  const { getData, getPicture } = useHttp();

  useEffect(() => {
    async function fetchData() {
      const fetchData = await getData({ category: 'planets', numberPage: count }); //якщо змінити число numberPage зміниться ім'я

      return setPlanet(fetchData);
    }
    fetchData();
  }, [getData, count]);


  useEffect(() => {
    async function fetchData() {
      const fetchData = await getPicture({ category: 'planets', numberPicture: count }); //якщо змінити число numberPage зміниться ім'я

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
      <h3>{planet.name}</h3>
      <ul className={classes.list}>
        <li>Climate: {planet.climate}</li>
        <li>Diameter: {planet.diameter}</li>
        <li>Population: {planet.population}</li>
      </ul>
    </div>
  )
}

export default Planets;