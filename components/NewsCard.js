import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NewsCard() {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://english.onlinekhabar.com/wp-content/uploads/2018/02/nepal-parliament-building.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lorem Ipsum
        </Typography>

        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper purus quis orci viverra
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}