import type { Meta, StoryObj } from "@storybook/react";
import { BookRate } from "@/components/books/BookRate";

const meta = {
  title: "Book/BookRate",
  component: BookRate,
  argTypes: {
    rating: {
      control: {
        type: "range",
        min: 0,
        max: 5,
        step: 0.5,
      },
    },
  },
} as Meta<typeof BookRate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 3,
  },
};

export const NoRating: Story = {
  args: {
    rating: undefined,
  },
};
