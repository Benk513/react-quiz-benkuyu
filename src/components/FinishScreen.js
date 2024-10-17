import React from 'react'

const FinishScreen = ({totalsPoints , points,highScore}) => {

    const percentage = (points /totalsPoints ) *100
  return (
    <>
    <p className='result'>You scored <strong>{points}</strong> out of {' '} {totalsPoints} ({Math.ceil(percentage)})</p>
    <p className='highscore'>{`highScore : ${highScore} points`}</p>

    </>
  )
}

export default FinishScreen