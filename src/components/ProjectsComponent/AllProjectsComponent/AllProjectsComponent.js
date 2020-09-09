import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import './common.css';

AllProjectsComponent.prototypes = {
    isHidden: PropTypes.number
}

function AllProjectsComponent(props) {

  const [visible, setVisibility] = React.useState(false);
  const useStyles = makeStyles((theme) =>
    createStyles({

        card: {
            margin: "30px",
            minWidth: '302',
            height: "280px",
            width: "280px",
            [theme.breakpoints.down('sm')]: {
                height: "230px",
                width: "230px",
            },
            transition: "opacity 0.5s linear"

        },
        media: {
            height: "150px",
             paddingTop: '6%',
        },
        content: {
            height: "10px"
        },
 
    })
  );
  const classes = useStyles();
  
  const handleVisibility = () => {
    setVisibility(!visible);
  }

  return (
    (props.isHidden === 0 ) ? 
    <div className="project-cards">
        <Card classes={{root:classes.card}}>
            <CardMedia
            className={classes.media}
            image= {require ("../images/asb.jpg")}
            />
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Akshat Bais Projects and Contact
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This and Contact section is in progress. kindly wait for a few mroe days.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={classes.card}>
        <CardMedia
        className={classes.media}
        image="../images/asb.jpg"
        title="Contemplative Reptile"
        />
        <CardActionArea>
                <CardContent classes={classes.content}>
                    <Typography >
                        Akshat Bais Projects and Contact
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This and Contact section is in progress. kindly wait for a few mroe days.
                </Typography>
                </CardContent>
            </CardActionArea>
        
        </Card>
        <Card className={classes.card}>
        <CardMedia
        className={classes.media}
        image="/images/asb.jpg"
        title="Contemplative Reptile"
        />
        <CardActionArea>
                <CardMedia
                image="../../images/asb.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Akshat Bais Projects and Contact
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This and Contact section is in progress. kindly wait for a few mroe days.
                </Typography>
                </CardContent>
            </CardActionArea>
        
        </Card>
        <Card className={classes.card}>
        <CardMedia
        className={classes.media}
        image="/images/asb.jpg"
        title="Contemplative Reptile"
        />
        <CardActionArea>
                <CardMedia
                image="../../images/asb.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Akshat Bais Projects and Contact
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This and Contact section is in progress. kindly wait for a few mroe days.
                </Typography>
                </CardContent>
            </CardActionArea>
        
        </Card>
        <Card classes={{root:classes.card}}>
        <CardMedia
        className={classes.media}
        image= {require ("../images/asb.jpg")}
        />
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Akshat Bais Projects and Contact
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This and Contact section is in progress. kindly wait for a few mroe days.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card classes={{root:classes.card}}>
        <CardMedia
        className={classes.media}
        image= {require ("../images/asb.jpg")}
        />
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Akshat Bais Projects and Contact
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This and Contact section is in progress. kindly wait for a few mroe days.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    : <div />
   



  );
}
export default AllProjectsComponent;