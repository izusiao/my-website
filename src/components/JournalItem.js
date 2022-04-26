import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function JournalItem({ img, title, desc, href }) {
  return (
    <Card variant="outlined" square>
      <CardMedia component="img" height={300} image={img} alt={title} />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
          {title}
        </Typography>
        <Typography variant="body1" component="div">
          {desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button href={href} target="_blank" rel="noopener" size="small">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
}

export default JournalItem;
