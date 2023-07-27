import React from 'react'
import { Link } from 'react-router-dom'
import './TeamTile.css'

export default function TeamTile({teamName}) {
  return (
    <Link to={`/teams/${teamName}`}>
    <div className='team-tile'><p>{teamName}</p></div>
    </Link>
  )
}
