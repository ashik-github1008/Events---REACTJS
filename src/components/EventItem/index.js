// Write your code here
import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  onClickEventImgBtn = () => {
    const {eventDetails, onClickEventImg} = this.props
    const {registrationStatus} = eventDetails

    // console.log("event img clicked")

    onClickEventImg(registrationStatus)
  }

  render() {
    const {eventDetails} = this.props
    const {imageUrl, name, location} = eventDetails

    return (
      <li className="event-item-container mr-4 mb-4">
        <button className="event-img-btn" onClick={this.onClickEventImgBtn}>
          <img src={imageUrl} alt="event" className="event-img mb-3" />
        </button>
        <p className="event-name">{name}</p>
        <p className="location">{location}</p>
      </li>
    )
  }
}

export default EventItem
