import React from 'react'

import Header from './Header'

export default {
  component: Header,
  title:'Header'
}


const Template = (args) => <Header {...args} />;

export const InputedTitle = Template.bind({})
InputedTitle.args = {
  title : 'test title'
}