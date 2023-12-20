import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'
import TaskDrop from './ItemsInColumns'
import { Input } from 'antd'
import './dashboard.css'
import { useState } from 'react'

const dataList = [
  {
    id: '04123aa',
    columnName: 'To do',
    tasks: [
      { id: '1234d0', name: '1', content: 'To do0' },
      { id: 'as2331', name: '2', content: 'To do1' },
      { id: 'ad3322', name: '3', content: 'To do2' },
    ],
  },
  {
    id: '19037841',
    columnName: 'Doing',
    tasks: [
      { id: '0393ba0', name: '4', content: 'Doing0' },
      { id: 'a2220b1', name: '5', content: 'Doing1' },
      { id: '2ab3294', name: '6', content: 'Doing2' },
    ],
  },
  {
    id: '2000927',
    columnName: 'Done',
    tasks: [
      { id: '09384ab7', name: '7', content: 'Done0' },
      { id: '1739347a', name: '8', content: 'Done1' },
      { id: '2ab67393', name: '9', content: 'Done2' },
    ],
  },
]

const changeColumn = (src, des, data, setData) => {
  const newList = data.filter((_, index) => index !== src.index)
  newList.splice(des.index, 0, data[src.index])
  setData(newList)
}

const changeItem = (src, des, data, setData) => {
  const { droppableId: desId, index: desItemIndex } = des
  const { droppableId: srcId, index: srcItemIndex } = src
  const desColId = Number(desId)
  const srcColId = Number(srcId)

  const newData = [...data]
  if (srcColId !== desColId) {
    newData[desColId].tasks.splice(desItemIndex, 0, newData[srcColId].tasks[srcItemIndex])
    newData[srcColId].tasks.splice(srcItemIndex, 1)
  }
  else {
    const newTasks = newData[srcColId].tasks.filter((_, index) => index !== srcItemIndex)
    newTasks.splice(desItemIndex, 0, data[srcColId].tasks[srcItemIndex])
    newData[srcColId].tasks = newTasks
  }
  setData(newData)
  // console.log(newData)
}

const handleDragEnd = (result, data, setData) => {
  // console.log('result:', [result.source.index, result.destination.index])

  const { source: src, destination: des, type } = result
  if (!des || !src) return
  if (des.droppableId === src.droppableId && des.index === src.index) return

  switch (type) {
    case 'column':
      changeColumn(src, des, data, setData)
      break
    case 'item':
      changeItem(src, des, data, setData)
      break
    default:
      break
  }
}

function ColumnsInBoard () {
  const [data, setData] = useState(dataList)

  return (
    <DragDropContext onDragEnd={(result) => handleDragEnd(result, data, setData)}>
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
                    <TaskDrop column={column} index={`${index}`} />
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