import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'

function TaskDrop ({ task }) {
  return (
    <Droppable
      // direction='horizontal'
      droppableId='droppable-xxx'
      type='task'>
      {(provided, snapshot) => (
        <div
          className=''
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {task.task.map((item, index) => {
            return (
              <Draggable
                key={item.task_id}
                draggableId={item.task_id}>
                {(provided, snapshot) => {
                  return (
                    <div
                      className='task_col'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <h1>{item.name}</h1>
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
  )
}

export default TaskDrop