import React, { useEffect } from 'react'

const Timer = ({remainingSeconds ,dispatch}) => {

    const mins = Math.floor(remainingSeconds/60)
    const secs = Math.floor(remainingSeconds %60)
    useEffect(function(){
        let intervalId = setInterval(function(){
           dispatch({type:'tick'})
            }, 1000);
            return function cleanup(){
                clearInterval(intervalId);
                }

    } ,[dispatch])
  return (
    <div className='timer'>{mins <10 &&"0"}{mins}:{secs <10 &&"0"} {secs}</div>
  )
}

export default Timer