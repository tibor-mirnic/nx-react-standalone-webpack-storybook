// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react';
import { One } from './One';

const meta: Meta<typeof One> = {
  component: One,
  excludeStories: ['One'],
  title: 'Modules/One/One',
};

export default meta;

type Story = StoryObj<typeof One>;

export const Default: Story = {};
