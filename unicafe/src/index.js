import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header1 = () => {
  return(
    <h1> give feedback </h1>
  )
}

const Button = (props) => {
  return(
    <div>
      <button onClick={() => props.setGood(props.good + 1)}> good </button>
      <button onClick={() => props.setNeutral(props.neutral + 1)}> neutral </button>
      <button onClick={() => props.setBad(props.bad + 1)}> bad </button>
    </div>
  )
}

const Header2 = () => {
  return(
    <h1> statistics </h1>
  )
}


const Statistic = (props) => {
  return(
    <tr>
    <td> {props.text}  </td> 
    <td> {props.value} </td>
    </tr>
  )
}



const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const avarage = (props.good - props.bad) / all
  const positive =  (props.good  / all ) * 100 + "%"

  if(all === 0){
    return(
      <div>
        no feedback given
      </div>
    )
  }


  return(
    <table>
      <thead>
      <Statistic text = "good" value ={props.good} />  
      <Statistic text = "neutral" value ={props.neutral} /> 
      <Statistic text = "bad" value ={props.bad} /> 
      <Statistic text = "all" value ={all} />  
      <Statistic text = "avarage" value ={avarage} />  
      <Statistic text = "positive" value ={positive} />  
      </thead>
    </table>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Header1 />
      <Button good = {good} neutral = {neutral} bad = {bad} setGood = {setGood} setBad = {setBad} setNeutral = {setNeutral} />
      <Header2 />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)