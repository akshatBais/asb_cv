import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
const drawerWidth = 240;
export function headerStyles(theme) {
 return createStyles({
    root: {
      // #181818
      background: '#24292E',
      boxShadow: 'none',
      [theme.breakpoints.down('sm')]: {
        height: '5vh',
      }
    },
    toolBarProps: {
      minHeight: '40px',
      justifyContent : "space-between"
    },
    sectionDesktop: {
      display: 'none',
      justifyContent: 'flex-end',
      [theme.breakpoints.up('sm')]: {
        display: 'inline-block',
      }
    },
    sectionMobile: {
      color: 'black',
      height: '50px',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
      },
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      }
    },
    homeIcon : {
      color: "#88F9FC",
      margin : "0 10px",
      transform : "scale(1.1)",
      fontSize : "large",
      '&:hover': {
        transform : "scale(2.2)"
      },
      // marginBottom : "20px"
    },
    menuIcon : {
      color: "#88F9FC",
      margin : "0px 10px 10px",
      transform : "scale(1.1)",
      fontSize : "large",
      '&:hover': {
        transform : "scale(2.2)"
      }
    },
    sendMessageButton : {
      border : "1px solid",
      '&:hover': {
        color : "#88F9FC"
      }
    },
    sendIcon : {
      color: "#88F9FC",
      margin : "0 10px",
      transform : "scale(0.5)",
      fontSize : "large",
      '&:hover': {
        transform : "rotate(-60deg) scale(1.6)",

      },
        transform: "rotate(-60deg)"
    },
    menuButtonProps: {
      color: '#D1D1D1'
      
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      }                                                                                                                                                                                                     
    },
    drawerPaper: {
      width : drawerWidth,
      background: '#24292E'
    },
    dwarerItems: {
      padding : "10px",
      marginTop: '30px'
    }
})
}