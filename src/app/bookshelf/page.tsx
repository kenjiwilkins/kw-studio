import { Box, Container } from "@mui/material";
import { ReadBookCount } from "@/components/books/ReadBookCount";
import { BookTable } from "@/components/books/BookTable";
import { ApolloClient, createHttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/experimental-nextjs-app-support";
import { gql } from "@apollo/client";

const getBooks = gql`
  query Book($status: Status) {
    book {
      totalCount
      books {
        authorName
        id
        rate
        status
        title
      }
    }
    bookByStatus(status: $status) {
      totalCount
    }
  }
`;

export default async function Home() {
  let t: any[] = [];
  let totalBooks = 0;
  let currentlyReading = 0;
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/",
    fetchOptions: { cache: "no-store" },
  });
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  try {
    const data = await client.query({
      query: getBooks,
      variables: { status: "reading" },
    });
    t = data.data.book.books;
    totalBooks = data.data.book.totalCount || 0;
    currentlyReading = data.data.bookByStatus.totalCount || 0;
  } catch (error) {
    console.error("error", error);
  }
  return (
    <Container maxWidth={false} disableGutters>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
          <ReadBookCount
            bookCount={totalBooks}
            period="Total books in your library"
          />
          <ReadBookCount
            bookCount={currentlyReading}
            period="currently reading"
          />
        </Box>
        <BookTable Books={t as any} />
      </Box>
    </Container>
  );
}
