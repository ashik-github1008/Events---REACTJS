// Write your code here
import {Component} from 'react'
import './index.css'

const registerStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'YET_TO_REGISTER',
  success: 'REGISTERED',
  failure: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderRegisteredView = () => {
    return (
      <div className="registration-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="already-registered-img mb-3"
        />
        <h1 className="registration-status text-center">
          You have already registered for the event
        </h1>
      </div>
    )
  }

  renderRegisteredClosedView = () => {
    return (
      <div className="registration-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="registration-details-img mb-4"
        />
        <h1 className="registration-status mb-3">
          Registrations Are Closed Now!
        </h1>
        <p className="registration-details-desc text-center">
          Stay tuned. We will reopen the registrations soon!
        </p>
      </div>
    )
  }

  renderYetToRegisterView = () => {
    return (
      <div className="registration-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="registration-details-img mb-4"
        />
        <p className="registration-details-desc text-center mb-4">
          A live performance brings so much to your relationship with
          dance.Seeing dance live can often make you fall totally in love with
          this beautiful art form.
        </p>
        <button className="btn btn-primary w-100 register-btn">
          Register Here
        </button>
      </div>
    )
  }

  renderRegistrationDetails = () => {
    const {registerStatus} = this.props
    switch (registerStatus) {
      case registerStatusConstants.success:
        return this.renderRegisteredView()
      case registerStatusConstants.failure:
        return this.renderRegisteredClosedView()
      case registerStatusConstants.inProgress:
        return this.renderYetToRegisterView()
      default:
        return (
          <p className="click-event-desc text-center">
            Click on an event, to view its registration details
          </p>
        )
    }
  }

  render() {
    return (
      <div className="registration-details-container">
        {this.renderRegistrationDetails()}
      </div>
    )
  }
}

export default ActiveEventRegistrationDetails
