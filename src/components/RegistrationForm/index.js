import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const isValidFirstName = firstName === ''
    this.setState({showFirstNameError: isValidFirstName})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const isValidFirstName = lastName === ''
    this.setState({showFirstNameError: isValidFirstName})
  }

  getNewResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      showFirstNameError: false,
      showLastNameError: false,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({showFirstNameError: true})
    } else if (lastName === '') {
      this.setState({showLastNameError: true})
    } else {
      return (
        <div className="result-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
            className="success"
          />
          <p className="heading">Submitted Successfully</p>
          <button
            type="button"
            className="button"
            onClick={this.getNewResponse}
          >
            Submit Another Response
          </button>
        </div>
      )
    }
  }

  render() {
    const {
      firstName,
      lastName,
      showFirstNameError,
      showLastNameError,
    } = this.state
    return (
      <div className="main-container">
        <h1 className="head">Registration</h1>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <label htmlFor="first" className="label-text">
            FIRST NAME
          </label>
          <input
            type="text"
            value={firstName}
            id="first"
            placeholder="First name"
            onBlur={this.onBlurFirstName}
            onChange={this.onChangeFirstName}
            className="inputElement"
          />
          {showFirstNameError ? <p className="error">Required</p> : ''}
          <label htmlFor="last" className="label-text">
            LAST NAME
          </label>
          <input
            type="text"
            value={lastName}
            id="last"
            placeholder="Last name"
            onBlur={this.onBlurLastName}
            onChange={this.onChangeLastName}
            className="inputElement"
          />
          {showLastNameError ? <p className="error">Required</p> : ''}
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
export default RegistrationForm
