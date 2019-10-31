import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return(
    <div>
      <h1> {props.course} </h1>
    </div>

  )
}

const Part = (props) => {
  return(
    <p> {props.name} {props.number} </p>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part name = {props.course.parts[0].name} number = {props.course.parts[0].exercises} />
      <Part name = {props.course.parts[1].name} number = {props.course.parts[1].exercises} />
      <Part name = {props.course.parts[2].name} number = {props.course.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {

  return(
    <div>
      <p> Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} </p>
    </div>
    
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course = {course.name} />
      <Content course = {course} />
      <Total course = {course}  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
