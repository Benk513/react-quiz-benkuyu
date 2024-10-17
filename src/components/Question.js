import React from 'react'
import Options from './Options';
import NextQuestion from './NextQuestion';
import Timer from './Timer';
import Footer from './Footer';

const Question = ({question , answer , dispatch,currentQuestion , numQuestions}) => {

    console.log(question)
  return (
    <div>
    <h4>{question.question} </h4>


    <Options question={question} answer={answer} dispatch={dispatch}/>
    


<Footer>
    <Timer/>
    <NextQuestion dispatch={dispatch} answer={answer} currentQuestion={currentQuestion} numQuestions={numQuestions}/>
</Footer>

   
    </div>
  )
}

export default Question;