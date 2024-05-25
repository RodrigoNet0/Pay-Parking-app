import type { Meta, StoryObj } from '@storybook/react';

import  Notification  from './Notification';

const meta: Meta = {
component: Notification,
};

export default meta;
type Story = StoryObj;

/*
*👇 Render functions are a framework specific feature to allow you control on how the component renders.

See https://storybook.js.org/docs/api/csf
to learn how to use render functions.
*/
export const Primary: Story = { 
render: () =>  <Notification />
};