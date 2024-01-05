import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  dataList: [
    {
      id: '04123aa',
      columnName: 'To do',
      tasks: [
        { id: '1234d0', name: '1', content: 'To do0' },
        { id: 'as2331', name: '2', content: 'To do1' },
      ],
    },
    {
      id: '19037841',
      columnName: 'Doing',
      tasks: [
        { id: '5ad3322', name: '3', content: 'Doing-1' },
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
        { id: '2ab63453', name: '10', content: 'Done3' },
        { id: 'b6733393', name: '11', content: 'Done4' },
      ],
    },
  ],
}

const changeColumnOrder = (src, des, data) => {
  const newList = data.filter((_, index) => index !== src.index)
  newList.splice(des.index, 0, data[src.index])
  return newList
}

const changeTaskItemOrder = (src, des, data) => {
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

  return newData
  // console.log(newData)
}

export const DropSlice = createSlice({
  name: 'drop',
  initialState,
  reducers: {
    change_column_order: (state, actions) => {
      const { source: src, destination: des } = actions.payload
      state.dataList = changeColumnOrder(src, des, state.dataList)
    },
    change_taskItem_order: (state, actions) => {
      const { source: src, destination: des } = actions.payload
      state.dataList = changeTaskItemOrder(src, des, state.dataList)
    },
    add_new_column: (state, actions) => {

    },
    add_new_task: (state, actions) => {

    },
  }
})

export const { change_column_order, change_taskItem_order, add_new_column, add_new_task } = DropSlice.actions
export const selectDrop = (state) => state.drop.dataList
export default DropSlice.reducer

