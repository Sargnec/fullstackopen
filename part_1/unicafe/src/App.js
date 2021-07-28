import React, { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => <tr>
  <td style={{ paddingRight: 10 }}>{text}</td>
  <td>{value}</td>
</tr>


const Statistic = ({ good, neutral, bad }) => {
  let total = good + bad + neutral;
  const percentage = () => {
    if (total === 0) {
      return 0
    } else {
      return (100 * good) / total
    }
  }
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistic</h1>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={(good - bad) / total} />
        <StatisticLine text="positive" value={percentage() + "%"} />
      </div>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App