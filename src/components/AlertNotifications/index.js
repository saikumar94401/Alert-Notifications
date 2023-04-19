import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import './index.css'
import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="alert-notification-container">
    <h1 className="alert-heading">Alert Notifications</h1>

    <Notification>
      <div className="children-top-container">
        <AiFillCheckCircle className="success icon" />
        <h1 className="heading success">Success</h1>
      </div>

      <p className="children-para">
        you can access all the files in the folder
      </p>
    </Notification>

    <Notification>
      <div className="children-top-container">
        <RiErrorWarningFill className="error icon" />
        <h1 className="heading error">Error</h1>
      </div>

      <p className="children-para">
        Sorry, you are not authorized to have access to delete the file
      </p>
    </Notification>

    <Notification>
      <div className="children-top-container">
        <MdWarning className="warning icon" />
        <h1 className="heading warning">Warning</h1>
      </div>

      <p className="children-para">
        Viewers of this file can see comments and suggestions
      </p>
    </Notification>

    <Notification>
      <div className="children-top-container">
        <MdInfo className="info icon" />
        <h1 className="heading info">Info</h1>
      </div>

      <p className="children-para">
        Anyone on the internet can view these files
      </p>
    </Notification>
  </div>
)

export default AlertNotifications
