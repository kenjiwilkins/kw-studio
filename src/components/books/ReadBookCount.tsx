import { Card, CardContent, Typography } from "@mui/material";
import { formatNumber } from "@/app/utils";

type Props = {
  bookCount: number;
  period: string;
};

export const ReadBookCount = (props: Props) => {
  return (
    <Card
      sx={{
        maxWidth: "fit-content",
      }}
    >
      <CardContent
        sx={{
          maxWidth: "fit-content",
        }}
        className="flex flex-col items-center"
      >
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          className="w-full text-left"
        >
          book count
        </Typography>
        <Typography variant="h3" color="text.primary">
          {formatNumber(props.bookCount)}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          {props.period}
        </Typography>
      </CardContent>
    </Card>
  );
};
