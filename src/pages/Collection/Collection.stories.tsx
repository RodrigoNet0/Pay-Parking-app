import type { Meta, StoryObj } from '@storybook/react';
import Collections from './Collections';

const meta: Meta = {
component: Collections,
};

export default meta;
type Story = StoryObj;

/*
*👇 Render functions are a framework specific feature to allow you control on how the component renders.

See https://storybook.js.org/docs/api/csf
to learn how to use render functions.
*/
export const Primary: Story = { 
render: () =>  <Collections />
};