import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ReadBookCount } from "@/components/books/ReadBookCount";

const meta = {
  title: "Book/ReadBookCount",
  component: ReadBookCount,
  argTypes: {
    bookCount: {
      control: {
        type: "number",
      },
    },
    period: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof ReadBookCount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bookCount: 10,
    period: "year 2024",
  },
};
