import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './TeamPage.css'
import MatchDetailCard from '../Component/MatchDetailCard'
import MatchSmallCard from '../Component/MatchSmallCard'
import { PieChart } from 'react-minimal-pie-chart';

export default function TeamPage() {

    const [team, setTeam] = useState({matches:[]});
    const { teamName } = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`/team/${teamName}`);
                const data = await response.json();
                console.log(data);
                setTeam(data);
            };
            fetchMatches(); 
        }, [teamName]
    );

    if(!team || !team.teamName) {
        return <h1>Team Not Found</h1>
    }
  return (
    <div className='TeamPage'>
        <div className='team-name'>
          <Link to = '/' className='link'><p>{'<'}Dashboard</p></Link>
          <h1 className='heading'>{team.teamName}</h1></div>
        <div className='win-loss'>Wins / Losses
        <PieChart
  data={[
    { title: 'Wins', value: team.totalWins , color: '#4da375' },
    { title: 'Losses', value: team.totalMatches-team.totalWins, color: '#a34d5d' },
  ]}
/>
</div>
        <div className='match-detail'>
        <h3>Latest Matches</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/></div>
        {team.matches.slice(1).map(match => <div><MatchSmallCard key={match.id} teamName={team.teamName} match={match}/></div>)}
        <Link to = {`/teams/${teamName}/matches/2022`}className = 'more-link link'>More {'>'}</Link>
    </div>
  )
}
