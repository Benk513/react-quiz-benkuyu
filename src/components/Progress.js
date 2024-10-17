import React from 'react'

const Progress = ({currentQuestion,numQuestions,points,totalsPoints,answer}) => {
  return (
    <header className='progress'>
    <progress max={numQuestions} value={currentQuestion + Number(answer !== null)}/>
        <p>Question <strong>{currentQuestion +1} </strong>/ {numQuestions} </p>

        <p><strong>{points} </strong> / {totalsPoints}</p>
    </header>
  )
}

export default Progress