import React, { useEffect, useState } from "react";
import useHttp from './../../services/sw-services';
import classes from './../Characters/AppCharacter.module.css';



const Starships = () => {

    const [statPick, setStatPick] = useState('')
    const [count, setCount] = useState(10);
    const [starship, setStarships] = useState({});
    const { getData, getPicture } = useHttp();

    useEffect(() => {
        async function fetchData() {
            const fetchData = await getData({ category: 'starships', numberPage: count }); //якщо змінити число numberPage зміниться ім'я

            return setStarships(fetchData);
        }
        fetchData();
    }, [getData, count]);


    useEffect(() => {
        async function fetchData() {
            const fetchData = await getPicture({ category: 'starships', numberPicture: count }); //якщо змінити число numberPage зміниться ім'я

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
            <h3>{starship.name}</h3>
            <ul className={classes.list}>
                <li>MGLT: {starship.MGLT}</li>
                <li>Created: {starship.created}</li>
                <li>Model: {starship.model}</li>
            </ul>
        </div>
    )
}

export default Starships;