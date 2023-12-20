import Selector from './Selector'
import ColumnsInBoard from './ColumnsInBoard'


function DashBoad () {
  return (
    <div className='dashboard_wrap'>
      <div>
        <h2>DashBoard</h2>
      </div>
      <div>
        <Selector />
      </div>
      <div>
        <ColumnsInBoard />
      </div>
    </div>
  )
}

export default DashBoad
