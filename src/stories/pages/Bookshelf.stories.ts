import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import BookSelf from "@/app/bookshelf/page";

const meta = {
  title: "Page/BookShelf",
  component: BookSelf,
  parameters: {
    layout: "padded",
  },
} as Meta<typeof BookSelf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
