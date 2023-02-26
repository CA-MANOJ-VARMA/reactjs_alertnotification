// Write your code here
import './index.css'

import Notification from '../Notification'

const NotificationArray = [
  {
    icon: 'AiFillCheckCircle',
    type: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    icon: 'RiErrorWarningFill',
    type: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    icon: 'MdWarning',
    type: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    icon: 'MdInfo',
    type: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => {
  console.log('hello')
  return (
    <div className="css-all-alertnotifications-container">
      <h1>Alert Notifications</h1>
      <ul className="css-ul-container">
        {NotificationArray.map(eachItem => (
          <Notification NotificationElement={eachItem} key={eachItem.type} />
        ))}
      </ul>
    </div>
  )
}

export default AlertNotifications
