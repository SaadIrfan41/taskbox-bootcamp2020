import { Story, Meta } from '@storybook/react/types-6-0'
import { TaskProps } from './index'
import Task from './index'
import { Provider } from 'react-redux'
import store from '../../../store/store'
export default {
  title: 'Task Component',
  component: Task,
} as Meta

const Template = (args) => (
  <Provider store={store}>
    <Task {...args} />
  </Provider>
)

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
}
