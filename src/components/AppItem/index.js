// Write your code here
import './index.css'

const AppItem = props => {
  const {appListDetails} = props
  const {appName, imageUrl} = appListDetails

  return (
    <li className="list-container">
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
