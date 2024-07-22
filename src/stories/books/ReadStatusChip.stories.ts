import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ReadStatusChip from "@/components/books/ReadStatusChip";

const meta = {
  title: "Book/ReadStatusChip",
  component: ReadStatusChip,
  argTypes: {
    status: {
      control: {
        type: "radio",
      },
      options: ["read", "unread", "reading"],
    },
  },
} as Meta<typeof ReadStatusChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Read: Story = {
  args: {
    status: "read",
  },
};

export const Unread: Story = {
  args: {
    status: "unread",
  },
};

export const Reading: Story = {
  args: {
    status: "reading",
  },
};
