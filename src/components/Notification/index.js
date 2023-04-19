import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      <div className="children-container">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
