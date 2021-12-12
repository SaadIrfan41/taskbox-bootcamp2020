import { createSlice } from '@reduxjs/toolkit'
export interface TaskProps {
  id: string
  title: string
  state: string
}

const defaultValues = [
  { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
  { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
  { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
  { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
  { id: '5', title: 'Task 5', state: 'TASK_PINNED' },
]

const TaskSlice = createSlice({
  name: 'Task Slice',
  initialState: defaultValues,
  reducers: {
    archiveTask: (state, { payload }) => {
      state.forEach((task) => {
        if (task.id === payload) {
          task.state = 'TASK_ARCHIVED'
          const index = state.indexOf(task)
          state.splice(index, 1)
        }
      })
    },
    pinTask: (state, { payload }) => {
      console.log('STATE', state)
      state.forEach((task) => {
        if (task.id === payload) {
          if (task.state !== 'TASK_PINNED') task.state = 'TASK_PINNED'
          else task.state = 'TASK_INBOX'
          console.log(state)
        }
      })
    },

    addTask: (state, { payload }) => {
      const task = {
        id: payload.id,
        title: payload.title,
        state: 'TASK_INBOX',
      }
      state.push(task)
    },
  },
})

export const { archiveTask, pinTask, addTask } = TaskSlice.actions

export default TaskSlice.reducer
