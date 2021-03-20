import {createStyles } from '@material-ui/core/styles';


export function footerStyles(theme) {
    return  createStyles({
        stickToBottom: {
            background: '#24292E',
            width: '100%',
            position: 'fixed',
            bottom: 0,
        },
        homeIcon : {
            color: "#88F9FC",
            margin : "0 10px",
            transform : "scale(1.1)",
            fontSize : "large",
            '&:hover': {
              transform : "scale(2.2)"
            }
          },
          toolBarProps: {
            minHeight: '40px',
            justifyContent : "space-between"
          },
    })

}