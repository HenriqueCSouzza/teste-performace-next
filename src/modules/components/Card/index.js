import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ image, title, link }) {
  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={link}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" component="a" href={image}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
