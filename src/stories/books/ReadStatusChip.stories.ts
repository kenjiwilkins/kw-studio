import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ReadStatusChip from "@/components/books/ReadStatusChip";
import { BookReadStatus } from "@/graphql/graphql";

const meta = {
  title: "Book/ReadStatusChip",
  component: ReadStatusChip,
  argTypes: {
    status: {
      control: {
        type: "radio",
      },
      options: ["Read", "Unread", "Reading"],
    },
  },
} as Meta<typeof ReadStatusChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Read: Story = {
  args: {
    status: BookReadStatus.Read,
  },
};

export const Unread: Story = {
  args: {
    status: BookReadStatus.Unread,
  },
};

export const Reading: Story = {
  args: {
    status: BookReadStatus.Reading,
  },
};
