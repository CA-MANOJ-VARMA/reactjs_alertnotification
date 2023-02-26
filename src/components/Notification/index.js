// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {NotificationElement} = props

  const IconFunction = () => {
    console.log('icon')
    switch (NotificationElement.icon) {
      case 'AiFillCheckCircle':
        return (
          <div className="css-icon-container" style={{color: '#2dca73'}}>
            <AiFillCheckCircle />
            <h1>{NotificationElement.type}</h1>
          </div>
        )
      case 'RiErrorWarningFill':
        return (
          <div className="css-icon-container" style={{color: '#ff0b37'}}>
            <RiErrorWarningFill />
            <h1>{NotificationElement.type}</h1>
          </div>
        )
      case 'MdWarning':
        return (
          <div className="css-icon-container" style={{color: '#ffb800'}}>
            <MdWarning />
            <h1>{NotificationElement.type}</h1>
          </div>
        )
      case 'MdInfo':
        return (
          <div className="css-icon-container" style={{color: '#0f81e0'}}>
            <MdInfo />
            <h1>{NotificationElement.type}</h1>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <li>
      <div className="css-notification-container">
        <div>
          {IconFunction()}
          <p>{NotificationElement.description}</p>
        </div>
        <div>
          <GrFormClose />
        </div>
      </div>
    </li>
  )
}

export default Notification
