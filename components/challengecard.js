import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export function CircularProgressCaption(props) {

    const val = Math.round(100*(props.current/props.total))
    
    return (
        <Box position="relative" display="inline-flex">
          <CircularProgress variant="determinate" 
            className="spinner"
            value={val}
            size={80}
            {...props} 
          />
          <Box className="spinner-text-box" >
            <p className="caption">
                <span className='large'>{props.current}</span><span className='tiny'>/{props.total}</span>
            </p>
          </Box>
        </Box>
      )
}

const ChallengeCard = (props) => {
    return (
        <Card>
          <CardContent className="container-full">
            <div className="container-about">
                <p color="textSecondary">
                Word of the Day
                </p>
                
                <p><b>benevolent</b></p>

                <p color="textSecondary">
                adjective
                </p>
                <p variant="body2" component="p">
                well meaning and kindly.
                <br />
                </p>
            </div>
            
            <div className="container-progress">
                <CircularProgressCaption current={2} total={5} />
            </div>

          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
}

export default ChallengeCard
