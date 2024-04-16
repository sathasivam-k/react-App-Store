// Write your code here
import './index.css'

const TabItem = props => {
  const {setActiveTabId, tabDisplayText, isActive} = props
  const {tabId, displayText} = tabDisplayText
  const tabClassName = isActive ? 'tab-button active' : 'tab-button'

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <li>
      <button type="button" className={tabClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
