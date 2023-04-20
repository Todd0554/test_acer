import React from 'react'
import "./style.css";
import Registration from "./registration.svg"
import Preparation from "./preparation.svg"
import Administration from "./administration.svg"
import CardChallenges from "./CardChallenges"
import science from "../2-Available/science.svg"
import math from "../2-Available/math.svg"
import readings from "../2-Available/readings.svg"
import CompetitionDatesCard from "./CompetitionDatesCard"

function Challenges() {
  const challenges = [
    {
      "url": Registration,
      "name": "Registration",
      "content": "On the XX of April 2021, registrations for the challenge will become available, with each subject costing XX per student to participate."
    },
    {
      "url": Preparation,
      "name": "Preparation",
      "content": "After registering, simply add participating students to your ACER account, either new or existing, and allocate the challenge."
    },
    {
      "url": Administration,
      "name": "Administration",
      "content": "Using ACER's online assessment and reporting platform, the challenge is administered digitally, with each subject expected to take around XX minutes for students to finish."
    },
  ]

  const competitions = [
    {
      "url": math,
      "name": "Mathematics",
      "date": "Monday, 16 August"
    },
    {
      "url": science,
      "name": "Science",
      "date": "Tuesday, 17 August"
    },
    {
      "url": readings,
      "name": "Reading",
      "date": "Wednesday, 18 August"
    },
  ]
  return (
    <div className="challenges">
      <h1 className="title-challenge">The 2023 challeng</h1>
      <div className="word6">
        <p >Participation in the challenge is open to all registered Australian schools, with students required to be enrolled in a participating school to take part.</p>
      </div>

      <div className="row row2">
        {challenges.map((e,i) => {
          return (
            <CardChallenges svgURL={e.url} name={e.name} content={e.content}/>
          )
        })}
      </div>
      <hr className="challenge-hr" color="#ffffff"/>
      <h1 className="compDa">Competition dates</h1>
      <div className="row" id="newRow">
        {competitions.map((e,i) => {
          return (
            <CompetitionDatesCard svgURL={e.url} name={e.name} date={e.date} />
          )
        })}
      </div>
    </div>
  )
}

export default Challenges