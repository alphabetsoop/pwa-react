import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';

export function CircularProgressCaption(props) {
    const [val, setVal] = useState(0)
    
    const valEnd = Math.round(100*(props.current/props.total))
    
    useEffect(() => {
        setTimeout(() => {
            setVal(valEnd)
        }, 100)
    }, [])

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
        <Card className="challenge-card">
            <CardContent className="container-full">
                <div className="container-about">
                    <p><b>{props.about}</b></p>
                    <p>{props.detail}</p>
                    <p>{props.reward}</p>
                </div>
                
                <div className="container-progress">
                    <CircularProgressCaption current={props.current} total={props.total} />
                </div>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
      );
}

export default ChallengeCard
