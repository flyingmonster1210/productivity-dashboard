import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'
import ItemsInColumns from './ItemsInColumns'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { change_column_order, change_taskItem_order, selectDrop } from '../../../redux/slice/drop'

const handleDragEnd = (result, dispatch) => {
  // console.log('result:', [result.source.index, result.destination.index])
  if (!result.destination) return

  const { source: src, destination: des, type } = result
  if (!des || !src) return
  if (des.droppableId === src.droppableId && des.index === src.index) return

  switch (type) {
    case 'column':
      dispatch(change_column_order(result))
      break
    case 'item':
      dispatch(change_taskItem_order(result))
      break
    default:
      console.error(`Error: Type error:${type} which is not column or item`)
      break
  }
}

function ColumnsInBoard () {
  const dispatch = useDispatch()
  const data = useSelector(selectDrop)

  return (
    <DragDropContext
      onDragEnd={(result) => handleDragEnd(result, dispatch)}
    >
      <Droppable direction='horizontal' droppableId='dragboard' type='column'>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='task-table'
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
                    className='task-table_column'
                  >
                    <h2>{column.columnName}</h2>
                    <ItemsInColumns column={column} index={`${index}`} />

                    <Input placeholder="Basic usage" />
                  </div>
                )
                }
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext >
  )
}

export default ColumnsInBoard