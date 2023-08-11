import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

const Cards = () => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 300,
        }}
      >
        <CardMedia
          component={'img'}
          height="150"
          image="https://images.unsplash.com/photo-1462804993656-fac4ff489837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="img"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component={'div'}>
            Programmer & Web Designer
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consyu adipahs elit.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
