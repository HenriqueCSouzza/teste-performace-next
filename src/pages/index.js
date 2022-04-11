// pages/index.tsx

import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "src/modules/components/Card";

const Home = (props) => {
  const { photos } = props;

  return (
    <Container>
      <Grid container direction="row" spacing={3}>
        {photos.map((photo) => (
          <Grid key={photo.id} item md={4}>
            <Card
              link={photo.url}
              image={photo.thumbnailUrl}
              title={photo.title}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  )
    .then((response) => response.json())
    .then((json) => json);

  return {
    props: {
      photos: res,
    },
    // revalidate: 60 * 60 * 24,
  };
};
