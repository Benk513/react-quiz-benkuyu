import React, { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Error from './components/Error'
import Loader from './components/Loader'
import StartScreen from './components/StartScreen'
import Question from './components/Question'
import Progress from './components/Progress'
import FinishScreen from './components/FinishScreen'

const initialState = {
  questions: [],

  // loading , ready , error , active, finished
  status: 'loading',
  currentQuestion: 0,
  answer : null,
  points :0,
  highScore:0
}

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'

      }
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      }
    case 'start':
      return {
        ...state,
        status: 'active'
      }
    case 'newAnswer':
      const question = state.questions.at(state.currentQuestion)
      return {
        ...state,
        answer:action.payload,
        points : action.payload === question.correctOption 
        ? state.points + question.points 
        : state.points
      }
    case 'nextQuestion':
      return{
        ...state,
        currentQuestion : state.currentQuestion + 1,
        answer : null
      
      }
      case 'finish':
        return{
          ...state,
          status : 'finished',
          highScore : Math.max(state.highScore, state.points)
        
        }

    default:
      throw new Error('No opertion supported')
  }
}

const App = () => {

  const [{ questions, status ,currentQuestion , answer ,points,highScore}, dispatch] = useReducer(reducer, initialState)

  const totalsPoints = questions.reduce((prev , curr) => prev +curr.points ,0)
  const numQuestions = questions.length


  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }))

  }, [])

  return (
    <div className='app'>
      <Header />
      <main>
        {status === "error" && <Error />}
        {status === "loading" && <Loader />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === "active" && <>
        <Progress currentQuestion={currentQuestion} numQuestions={numQuestions} points={points} totalsPoints={totalsPoints} answer={answer}
        />
        <Question question={questions[currentQuestion]} answer={answer} dispatch= {dispatch} currentQuestion={currentQuestion} numQuestions={numQuestions}/>
        </> 
        }

        {status ==="finished" && <FinishScreen totalsPoints={totalsPoints} points={points} highScore={highScore}/>}
      </main>
    </div>
  )
}
export default App