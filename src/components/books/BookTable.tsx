import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { BookRate } from "./BookRate";
import ReadStatusChip from "./ReadStatusChip";
import { Chip } from "../common/Chip";
import { Status } from "@/graphql/graphql";

export interface BookTableProps {
  Books: {
    id: string;
    title: string;
    authorName: string;
    status: Status;
    rate?: string;
  }[];
}

export const BookTable = (props: BookTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} arira-label="book table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.Books.map((book) => (
            <TableRow key={book.id}>
              <TableCell component="th" scope="row">
                {book.title}
              </TableCell>
              <TableCell>
                <Chip title={book.authorName} />
              </TableCell>
              <TableCell>
                <ReadStatusChip status={book.status} />
              </TableCell>
              <TableCell>
                <BookRate rate={book.rate || undefined}></BookRate>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
