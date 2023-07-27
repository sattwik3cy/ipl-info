import React from 'react'
import { Link } from 'react-router-dom';
import './MatchDetailCard.css'

export default function MatchDetailCard({teamName, match}) {

  const otherTeam = match.team1 === teamName? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;
  if(!match) return <div>error</div>;
  return (
    <div className={ isMatchWon ? 'MatchDetailCard green-card' : 'MatchDetailCard red-card' }>
      <div className='basic-details'>
      <span className='vs'>vs</span>
      <Link className='link' to={otherTeamRoute}><h1> {otherTeam}</h1></Link>
      <h2 className='match-date'>{match.date}</h2>
      <h3 className='match-venue'>at {match.venue}</h3>
      <h3 className='match-winner'>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
      <h3>{match.tossWinner} won the toss and chose to {match.tossDecision}</h3>
      </div>
      <div className='more-details'>
        <h3 className='innings'>First Innings</h3>
        <p className='innings-detail'>{match.team1}</p>
        <h3 className='innings'>Second Innings</h3>
        <p className='innings-detail'>{match.team2}</p>
        <h3 className='innings'>Man of the Match</h3>
        <p className='innings-detail'>{match.playerOfMatch}</p>
      </div> 
    </div>
  )
}
