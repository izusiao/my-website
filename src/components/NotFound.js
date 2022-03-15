import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function NotFound() {
  return (
    <Container>
      <Typography variant="h3" textAlign="center" mt={12}>
        <Box>404</Box>
        <Box>Page not found</Box>
      </Typography>
    </Container>
  );
}

export default NotFound;
