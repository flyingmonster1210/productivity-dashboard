import Selector from './Selector'
import DragBoard from './DragBoard'


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
        <DragBoard />
      </div>
    </div>
  )
}

export default DashBoad
