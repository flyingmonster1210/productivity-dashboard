import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'
import { Input } from 'antd'
import TaskDrop from './TaskDrop'
import './dashboard.css'

const data = [
  {
    columnName: 'To do',
    tasks: [
      { id: '0', content: 't0' },
      { id: '1', content: 't1' },
      { id: '2', content: 't2' },
    ],
  },
  {
    columnName: 'Doing',
    tasks: [
      { id: '0', content: 't0' },
      { id: '1', content: 't1' },
      { id: '2', content: 't2' },
    ],
  },
  {
    columnName: 'Done',
    tasks: [
      { id: '0', content: 't0' },
      { id: '1', content: 't1' },
      { id: '2', content: 't2' },
    ],
  },
]

const handleDragEnd = () => {
  console.log('handle drag end')
}

function DragBoard () {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable direction='horizontal' droppableId='dragboard' type='dragboard'>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='dragboard_wrap'
          >
            {data.map((item, index) => {
              // console.log(item)
              return (
                <Draggable
                  key={`column-${index}`}
                  draggableId={`column-${index}`}
                  index={index}
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className='dragboard_column'
                      >
                        <h2>{item.columnName}</h2>
                        <TaskDrop tasks={item.tasks} colIndex={index} />
                      </div>
                    )
                  }}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DragBoard