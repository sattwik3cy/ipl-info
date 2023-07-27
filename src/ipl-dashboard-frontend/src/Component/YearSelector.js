import React from 'react'
import { Link } from 'react-router-dom';

export default function YearSelector({teamName}) {
    let years = [];
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endYear = process.env.REACT_APP_DATA_END_YEAR;
    for(let i = startYear; i <= endYear; i++)
    {
        years.push(i);
    }

    return (
        years.map(year => <Link to = {`/teams/${teamName}/matches/${year}`}><h4>{year}</h4></Link>)
    )
}
