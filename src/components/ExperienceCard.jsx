import React from 'react'

const ExperienceCard
 = (props) => {
  return (
    <div className="experience-card">
      <div className="experience-title">
        <h2>{props.name}</h2>
      </div>
      <div className="experience-position">
        Position : {props.position}
      </div>
      <div className="experience-position">
        Department : {props.department}
      </div>
      <div className="experience-position">
        Role : {props.role}
      </div>
      <div className="experience-position">
        Duration : {props.duration}
      </div>
    </div>
  )
}

export default ExperienceCard
