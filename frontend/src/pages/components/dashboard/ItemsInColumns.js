import { Draggable, Droppable } from 'react-beautiful-dnd'

function ItemsInColumns ({ column, index: colIndex }) {
  const { id: colId, tasks } = column

  return (
    <Droppable direction='vertical' droppableId={colIndex} type='item'>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className='tasks_list'
        >
          {tasks.map((task, index) => (
            <Draggable
              key={`task-${task.id}-${index}`}
              draggableId={`${colId}-${task.id}`}
              index={index}
              type='column'
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className='task_item'
                >
                  <h2>{task.name}</h2>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default ItemsInColumns