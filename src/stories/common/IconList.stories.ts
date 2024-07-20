import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { IconList } from "@/components/common/IconList";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function generateListItems(count: number) {
  // index operand to handle icon properties
  // 0 for imageUrl, 1 for emoji, 2 for no icon with long title
  type item = {
    imageUrl?: string;
    title: string;
    emoji?: string;
    id: string;
  };
  const result: item[] = [];
  for (let i = 0; i < count; i++) {
    const item: item = {
      title: `Item ${i + 1}`,
      id: `${i + 1}`,
    };
    if (i % 3 === 0) {
      item.imageUrl = "https://via.placeholder.com/150";
    } else if (i % 3 === 1) {
      item.emoji = "🎉";
    }
    result.push(item);
  }
  return result;
}

const meta = {
  title: "Common/IconList",
  component: IconList,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    listTitle: {
      control: {
        type: "text",
      },
    },
    maxWidth: {
      control: {
        type: "number",
      },
    },
    maxHeight: {
      control: {
        type: "number",
      },
    },
  },
} as Meta<typeof IconList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    listTitle: "Icon List",
    items: [
      {
        imageUrl: "https://via.placeholder.com/150",
        title: "Item 1",
        id: "1",
      },
      {
        emoji: "🎉",
        title: "Item 2",
        id: "2",
      },
      {
        title: "Item 3",
        id: "3",
      },
    ],
    onClick: fn(),
  },
};

export const LongTitle: Story = {
  args: {
    listTitle: "Icon List",
    items: [
      {
        imageUrl: "https://via.placeholder.com/150",
        title: loremIpsum,
        id: "1",
      },
      {
        emoji: "🎉",
        title: loremIpsum,
        id: "2",
      },
      {
        title: loremIpsum,
        id: "3",
      },
    ],
    onClick: fn(),
  },
};

export const LongList: Story = {
  args: {
    listTitle: "Icon List",
    items: generateListItems(50),
    onClick: fn(),
  },
};

export const fixedSize: Story = {
  args: {
    listTitle: "Icon List",
    items: generateListItems(50),
    onClick: fn(),
    maxWidth: 300,
    maxHeight: 300,
  },
};

export const EmptyList: Story = {
  args: {
    listTitle: "Icon List",
    items: [],
    onClick: fn(),
  },
};
