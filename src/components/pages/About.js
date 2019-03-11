import React from 'react'

function About() {
  return (
    <React.Fragment>
      
      <p style ={Style}>
      <p>Avec TakiAgenda :</p>
      <p>- Fixez-vous des objectifs personnels et professionnels.</p>
      <p>- Ajoutez les à votre planning.</p>
      <p>- Barrez ou effacez les tâches accomplies.</p>
      <p>Avec TakiAgenda planifiez votre journée, organisez votre vie et gagnez votre temps ...</p>
      </p>
    </React.Fragment>
  )
}
const Style = {
  background: 'white',
  color: 'grey',
  textAlign: 'center',
  padding: '10px',
  fontFamily: 'Arial',
  fontSize: '15px'
}
export default About;