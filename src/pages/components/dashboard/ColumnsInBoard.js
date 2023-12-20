import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'
import TaskDrop from './ItemsInColumns'
import './dashboard.css'
import { useState } from 'react'

const dataList = [
  {
    id: '0',
    columnName: 'To do',
    tasks: [
      { id: '0', content: 'To do0' },
      { id: '1', content: 'To do1' },
      { id: '2', content: 'To do2' },
    ],
  },
  {
    id: '1',
    columnName: 'Doing',
    tasks: [
      { id: '0', content: 'Doing0' },
      { id: '1', content: 'Doing1' },
      { id: '2', content: 'Doing2' },
    ],
  },
  {
    id: '2',
    columnName: 'Done',
    tasks: [
      { id: '0', content: 'Done0' },
      { id: '1', content: 'Done1' },
      { id: '2', content: 'Done2' },
    ],
  },
]

const handleDragEnd = ({ source, destination }, list, setList) => {
  if (destination === null || destination === undefined) return null
  if (source === null || source === undefined) return null
  if (destination.index === source.index) return null

  console.log('source', source)
  console.log('destination', destination)
  const newList = list.filter((_, index) => index !== source.index)
  newList.splice(destination.index, 0, list[source.index])
  setList(newList)
}

function ColumnsInBoard () {
  const [data, setData] = useState(dataList)

  return (
    <DragDropContext onDragEnd={(result) => console.log('result', result)}>
      <Droppable direction='horizontal' droppableId='dragboard' type='column'>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='dragboard_wrap'
          >
            {data.map((column, index) => (
              <Draggable
                key={`column-${column.id}`}
                draggableId={`column-${column.id}`}
                index={index}
                type='column'
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='dragboard_column'
                  >
                    <h2>{column.columnName}</h2>
                    <TaskDrop column={column} />
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
    </DragDropContext >
  )
}

export default ColumnsInBoard