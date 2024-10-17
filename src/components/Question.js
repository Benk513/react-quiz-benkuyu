import React from 'react'
import Options from './Options';
import NextQuestion from './NextQuestion';

const Question = ({question , answer , dispatch,currentQuestion , numQuestions}) => {

    console.log(question)
  return (
    <div>
    <h4>{question.question} </h4>


    <Options question={question} answer={answer} dispatch={dispatch}/>

    <NextQuestion dispatch={dispatch} answer={answer} currentQuestion={currentQuestion} numQuestions={numQuestions}/>

   
    </div>
  )
}

export default Question;