import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <div className="flex justify-evenly">
        <Typography variant="h1" color="gray">
          KW STUDIO
        </Typography>
      </div>
    </Container>
  );
}
