import { Meta, Story } from '@storybook/react/types-6-0'

import React from 'react'
import InboxScreen from '../InboxScreen'
import { Provider } from 'react-redux'
import store from '../../../store/store'

export default {
  title: 'Inbox Screen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  component: InboxScreen,
} as Meta

const Template: Story = () => <InboxScreen />

export const DefaultInboxScreen = Template.bind({})
