import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function PostCard(props) {
    // a preview of a post that is displayed on the feed
    // could be filled with information from news api

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                    title={props.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.content}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Read More
                </Button>
            </CardActions>
        </Card>
    )
}