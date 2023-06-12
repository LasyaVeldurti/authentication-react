// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <div className="bg-container">
        <img
          className="login-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="form-container">
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
          />
          <form className="login-form" onSubmit={this.onSubmitLogin}>
            <label htmlFor="username">Username</label>
            <br />
            <input
              onChange={this.onChangeUsername}
              placeholder="username"
              value={username}
              id="username"
              type="text"
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              onChange={this.onChangePassword}
              placeholder="password"
              value={password}
              id="password"
              type="password"
            />
            <br />
            <button className="login-btn" type="submit">
              Login
            </button>
            <p className="error-message">*{errorMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
