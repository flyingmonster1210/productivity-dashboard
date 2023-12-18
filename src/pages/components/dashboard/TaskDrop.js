import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'

const handleDragEnd = () => {
  console.log('drag task')
}

function TaskDrop ({ tasks, colIndex }) {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable direction='vertical' droppableId={`column-${colIndex}`} type='column'>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          // className='dragboard_wrap'
          >
            {tasks.map((item, index) => {
              return (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className='task_item'
                      >
                        <h2>{`col${colIndex}-id${item.id}-${item.content}`}</h2>
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

export default TaskDrop