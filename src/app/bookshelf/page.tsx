import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ReadStatusChip from "@/components/books/ReadStatusChip";

function createBook(title: string, status: "read" | "unread" | "reading") {
  return { title, status };
}

const rows = [
  createBook("The Great Gatsby", "read"),
  createBook("The Catcher in the Rye", "unread"),
  createBook("To Kill a Mockingbird", "reading"),
];

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="bookshelf table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell>
                  <ReadStatusChip status={row.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
