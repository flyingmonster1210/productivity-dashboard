import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'
import { Input } from 'antd'
import TaskDrop from './TaskDrop'
import './dashboard.css'

const data = [
  {
    "dashboard_key": "1111",
    "task": [
      {
        "name": "00",
        "type": "task",
        "owner": "azer",
        "task_id": "111111111"
      },
      {
        "name": "01",
        "type": "task",
        "owner": "ssss",
        "task_id": "112111"
      },
      {
        "name": "02",
        "type": "task",
        "owner": "xxx",
        "task_id": "311221111"
      },
    ]
  },
  {
    "dashboard_key": "2222",
    "task": [
      {
        "name": "00",
        "type": "task",
        "owner": "azer",
        "task_id": "1009"
      },
      {
        "name": "01",
        "type": "task",
        "owner": "ssss",
        "task_id": "1234009"
      },
      {
        "name": "02",
        "type": "task",
        "owner": "xxx",
        "task_id": "311256"
      },
    ]
  },
]

function DragBoard () {
  return (
    <div className='dragboard_body_wrap'>
      <DragDropContext>
        <Droppable
          direction='horizontal'
          droppableId='droppable-xxx'
          type='dashboard'>
          {(provided, snapshot) => (
            <div
              className='dragboard_wrap'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.map((item, index) => {
                return (
                  <Draggable
                    key={item.dashboard_key}
                    draggableId={item.dashboard_key}
                    index={index}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          className='task_col'
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <h1>{item.dashboard_key}</h1>
                          <TaskDrop task={item} />
                        </div>
                      )
                    }}
                  </Draggable>
                )
              })}
              <div>
                {/* <Input onPressEnter={input_keydown} placeholder='Creat New Dashboard' /> */}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default DragBoard