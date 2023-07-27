import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MatchDetailCard from '../Component/MatchDetailCard'
import { useParams } from 'react-router-dom'
import YearSelector from '../Component/YearSelector'
import './MatchPage.css'

export default function MatchPage() {

  const [matches, setMatches] = useState([]);
  const { year, teamName } = useParams();

  useEffect(
    () => {
      const fetchMatches = async () => {
        const response = await fetch(`/team/${teamName}/matches?year=${year}`);
        const data = await response.json();
        setMatches(data);
      };
      fetchMatches()
    },[teamName, year]
  );
  return (
    <div className='MatchPage'>
      <div className='year-selector'>Select Year<YearSelector teamName = {teamName}/></div>
      <div>
      <h1 className='match-title'>{teamName} matches for the year {year}</h1>
      {matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match}/>)}
      </div>
    </div>
  )
}
