import type { Meta, StoryObj } from '@storybook/react';

import { Primary } from './Notification.storys';

const meta = {
  component: Primary,
} satisfies Meta<typeof Primary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};