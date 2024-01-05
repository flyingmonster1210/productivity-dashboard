import Selector from './Selector'
import ColumnsInBoard from './ColumnsInBoard'
import './dashboard.css'


function DashBoad () {
  return (
    <div className='dashboard_wrap'>
      <h2>DashBoard</h2>
      <Selector />
      <div className='space_for_task-table'>
        <ColumnsInBoard />
      </div>
    </div>
  )
}

export default DashBoad
