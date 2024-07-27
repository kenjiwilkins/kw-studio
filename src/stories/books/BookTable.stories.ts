import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { BookTable, BookTableProps } from "@/components/books/BookTable";
import { faker } from "@faker-js/faker";
import { BookReadStatus } from "@/graphql/graphql";

function generateBooks(count: number) {
  const result: BookTableProps["Books"] = [];
  for (let i = 0; i < count; i++) {
    result.push({
      id: `${i + 1}`,
      title: faker.music.songName(),
      author: {
        name: faker.person.fullName(),
        imageUrl: i % 3 === 0 ? faker.image.avatar() : undefined,
      },
      status:
        i % 3 === 0
          ? BookReadStatus.Read
          : i % 3 === 1
            ? BookReadStatus.Unread
            : BookReadStatus.Reading,
      rating: i % 6,
    });
  }
  return result;
}

const meta = {
  title: "Book/BookTable",
  component: BookTable,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof BookTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Books: generateBooks(6),
  },
};
