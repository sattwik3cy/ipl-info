import React from 'react'
import { Link } from 'react-router-dom'
import './MatchSmallCard.css'

export default function MatchSmallCard({teamName, match}) {
  const otherTeam = match.team1 === teamName? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;
  return (
    <div className={ isMatchWon ? 'MatchSmallCard green-card' : 'MatchSmallCard red-card' }> <Link className='link' to={otherTeamRoute}><span>vs</span><h3> {otherTeam}</h3></Link>
    <p className='more-det'>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  )
}
