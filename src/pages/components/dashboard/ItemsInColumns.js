import { Draggable, Droppable } from 'react-beautiful-dnd'

function ItemsInColumns ({ column }) {
  const { id: colId, tasks } = column

  return (
    <Droppable direction='vertical' droppableId={`column-${colId}`} type='item'>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {tasks.map((task, index) => (
            <Draggable
              key={`${colId}-${task.id}`}
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
                  <h2>{task.content}</h2>
                </div>
              )
              }
            </Draggable>
          )
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default ItemsInColumns