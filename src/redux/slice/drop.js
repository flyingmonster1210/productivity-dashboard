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

export const DropSlice = createSlice({
  name: 'drop',
  initialState,
  reducers: {
    change_column_order: (state, actions) => {

    },
    change_taskSame_order: (state, actions) => {

    },
    change_taskDiff_order: (state, actions) => {

    },
    add_new_column: (state, actions) => {

    },
    add_new_task: (state, actions) => {

    },
  }
})

export const { } = DropSlice.actions
export const selectDrop = (state) => state.drop.dataList
export default DropSlice.reducer

