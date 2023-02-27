// Write your code here
import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'

const NotificationArray = [
  {
    icon: <AiFillCheckCircle />,
    type: 'Success',
    description: 'You can access all the files in the folder',
    color: '#2dca73',
  },
  {
    icon: <RiErrorWarningFill />,
    type: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
    color: '#ff0b37',
  },
  {
    icon: <MdWarning />,
    type: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
    color: '#ffb800',
  },
  {
    icon: <MdInfo />,
    type: 'Info',
    description: 'Anyone on the internet can view these files',
    color: '#0f81e0',
  },
]

const AlertNotifications = () => {
  console.log('hello')
  return (
    <div className="css-all-alertnotifications-container">
      <h1>Alert Notifications</h1>
      <ul className="css-ul-container">
        {NotificationArray.map(eachItem => (
          <Notification>
            <li key={eachItem.type}>
              <div className="css-notification-container">
                <div>
                  <div
                    className="css-icon-container"
                    style={{color: eachItem.color}}
                  >
                    {eachItem.icon}
                    <h1>{eachItem.type}</h1>
                  </div>
                  <p>{eachItem.description}</p>
                </div>
                <div>
                  <GrFormClose />
                </div>
              </div>
            </li>
          </Notification>
        ))}
      </ul>
    </div>
  )
}

export default AlertNotifications
