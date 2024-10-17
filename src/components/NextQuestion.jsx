import React from 'react'

const NextQuestion = ({answer, dispatch ,currentQuestion , numQuestions}) => {
    if(answer ===null) return null
 
    if(currentQuestion < numQuestions -1)
        return(
            <button className='btn btn-ui'
    onClick={() => dispatch({type:'nextQuestion'})}>Next</button>
    )
    
    if(currentQuestion ===numQuestions-1) 
        return(
            <button className='btn btn-ui'
    onClick={() => dispatch({type:'finish'})}>Finish</button>
    )
    
 
}

export default NextQuestion