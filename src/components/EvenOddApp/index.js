// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0}

  Incrementnum = () => {
    const {num} = this.state
    this.setState(() => ({num: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {num} = this.state

    return (
      <div className="container">
        <div className="content">
          <h1>Count {num}</h1>
          {num % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}
        </div>
        <button type="submit" onClick={this.Incrementnum}>
          Increment
        </button>
        <p className="description">
          Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}
export default EvenOddApp
