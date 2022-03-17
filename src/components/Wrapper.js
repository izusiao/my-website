import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Wrapper({ title, children }) {
  return (
    <Container maxWidth="xl" sx={{ mt: 6, mb: 6 }}>
      <Typography
        variant="h2"
        sx={{ color: "text.primary", textAlign: "center", pb: 6 }}
      >
        {title}
      </Typography>
      {children}
    </Container>
  );
}

export default Wrapper;
