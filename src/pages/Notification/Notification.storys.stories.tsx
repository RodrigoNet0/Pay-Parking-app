import type { Meta, StoryObj } from '@storybook/react';

import NotificationStorys from './Notification.storys';

const meta = {
  component: NotificationStorys,
} satisfies Meta<typeof NotificationStorys>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};