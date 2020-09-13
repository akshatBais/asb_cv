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
                width: "100%",
                margin: "20px 0px",

            },
            '&:hover': {
                transform: "scale(1.1)"
            },
            visibility: "visible",
            opacity: 1,
            transition: "opacity 2s linear",
            borderRadius: "8vh"

        },
        cardAfter: {
            margin: "30px",
            minWidth: '302',
            height: "280px",
            width: "280px",
            [theme.breakpoints.down('sm')]: {
                height: "230px",
                width: "230px",
            },
            // transition: "opacity 0.5s linear",
            // transform : "scale(0.5)",
            visibility: "hidden",
            opacity: 0,
            transition: "visibility 0s 1s, opacity 1s linear",
            position: "absolute",
            borderRadius: "8vh"
            
        },
        media: {
            height: "150px",
             paddingTop: '6%',
             [theme.breakpoints.down('sm')]: {
                height: "125px",
                // width: "230px",
            },
        },
        content: {
            height: "10px",
            [theme.breakpoints.down('sm')]: {
                height: "6px",
                // width: "230px",
            },
        },
        description: {
            fontSize: "14px",
            [theme.breakpoints.down('sm')]: {
                fontSize: "12px"
            },
        }
 
    })
  );
  const classes = useStyles();
  


  return (
    // (props.isHidden === 0 ) ? 
    <div className="project-cards">
        {/* hidden={props.isHidden == 1} */}
        <Card classes={{root:props.isHidden == 1 || props.isHidden == 2 ? classes.cardAfter : classes.card}}>
            <CardMedia
            className={classes.media}
            image= {require ("../images/kpr.jpeg")}
            title="KhelPlayRummy"
            />
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h7">
                        Khel Play Rummy App : India's largest online gaming app
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.description}>
                    Working on re-architecturing the gaming app
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card classes={{root:props.isHidden == 2 ? classes.cardAfter : classes.card}}>
            <CardMedia
            className={classes.media}
            image={require("../images/v18.png")}
            title="CRISP"
            />
            <CardActionArea>
                    <CardContent classes={classes.content}>
                        <Typography gutterBottom variant="h7">
                            Content Review Portal for viacom18
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.description}>
                        To review content and share comments with partial and full text search mechanism
                    </Typography>
                    </CardContent>
            </CardActionArea>
            
        </Card>
        <Card classes={{root:props.isHidden == 2 ? classes.cardAfter : classes.card}}>
            <CardMedia
            className={classes.media}
            image={require("../images/v18.png")}
            title="Invoice Portal"
            />
            <CardActionArea>
                    <CardContent classes={classes.content}>
                        <Typography gutterBottom variant="h7">
                            Invoice Portal for viacom18
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.description}>
                        Portal for customers to download invoices. Admin to navigate through all the invoices
                    </Typography>
                    </CardContent>
            </CardActionArea>
            
        </Card>
        <Card classes={{root:props.isHidden == 1 || props.isHidden == 2 ? classes.cardAfter : classes.card}}>
            <CardMedia
            className={classes.media}
            image= {require ("../images/nr.jpg")}
            title="Nikki Rafiki"
            />
            <CardActionArea>
                    {/* <CardMedia
                    image="../../images/asb.jpg"
                    title="Nikki Rafiki"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h7">
                            Nikki Rafiki : Sports prediction game app
                        </Typography>
                        <Typography variant="body2" color="textSecondary"className={classes.description}>
                        Developed the backend using google Firebase DB, cloud functions and push notifications.
                    </Typography>
                    </CardContent>
            </CardActionArea>
            
        </Card>
        <Card classes={{root:props.isHidden == 2 ? classes.cardAfter : classes.card}}>
            <CardMedia
            className={classes.media}
            image= {require ("../images/owa.png")}
            title="Web Outlook PLugin"
            />
            <CardActionArea>
                    {/* <CardMedia
                    image="../images/owa.png"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h7">
                            Web Outlook Plugin
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.description}>
                    Web outlook plugin using Angular 9 and nodejs, dealing with Microsoft graph apis.Available on outlook store.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            
        </Card>
        <Card classes={{root:props.isHidden == 2 ? classes.cardAfter : classes.card}}>
            <CardMedia
            className={classes.media}
            image= {require ("../images/asb.jpg")}
            title="Google Plugin"
            />
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h7">
                        Google Plugin
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.description}>
                    Google plugin made using App script and nodejs. Capturing users' meetings information and recurring meeting
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card classes={{root:props.isHidden == 1 || props.isHidden == 2 ? classes.cardAfter : classes.card}} >
            <CardActionArea>
                <CardMedia className={classes.media} image= {require ("../images/ing.jpg")} title="CME" />
                <CardContent>
                    <Typography variant="h7">
                        Covenant Monitoring Engine
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.description}>
                    A monitoring engine for ING bank application for lending domain
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
   
   </div>

  );
}
export default AllProjectsComponent;