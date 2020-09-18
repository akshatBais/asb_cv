import React, { FormEventHandler } from 'react';
import './ContactComponent.css'
import { Divider, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';
import {httpcall} from '../common';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    margin : {
        margin : theme.spacing(1),
        color: "aqua",
        "&:hover" : {
            transform : "scale(1.2)"
        }
    },
    textField : {
        color: "white",
        width: "100%"
    },
    label: {
        color: "grey"
    },
    accountIcon: {
        color: "yellow",
        margin: "20px 10px 0px"
    },
    callIcon: {
        color: "pink",
        margin: "20px 10px 0px"
    }
})
// let dissableSubmitButton = true;

class ContactComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            contactNumber: "",
            message : "",
            isFormDisabled : false,
            isButtonDisabled : false
        };
        
        this.haandleFormSubmit = this.haandleFormSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
        this.sendAnotherMessage = this.sendAnotherMessage.bind(this);
    }

    sendAnotherMessage() {
        this.setState({ isFormDisabled : false , isButtonDisabled : false    })
    }
    // event: React.FormEvent<HTMLFormElement>
    haandleFormSubmit() {
        this.setState({ isButtonDisabled : true})
        // event.preventDefault();https://akshat-profile-node.herokuapp.com
        // https://akshat-profile-node.herokuapp.com/data/addClient
        // http://localhost:5000/data/addClient
        httpcall("post", "https://akshat-profile-node.herokuapp.com/data/addClient", this.state , "SUCESS").then(() => {
            // console.log("saved");
            this.setState({
                message : "",
                name: "",
                contactNumber: 0,
                isFormDisabled : true
            });
        })
        console.log("submit button called")
    }

    handleInput(e) {
        console.log( e.currentTarget.name)
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;
        this.setState({
            ...this.state,
            [name]: value
        });

    }

    handleTextArea(e) {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;
        this.setState({
            ...this.state,
            [name] : value
        })
    }

    render() {
        const {classes} = this.props;
        return (

            <section className="contact" id="contact">
                <Divider />
                <div className="contact-information">
                    <div className="message">
                        <p>If you like my profile and think my skills can be leveraged for your project and requirements.
                        Kindly fill your information and leave a message. Thanks !!</p>
                    </div>
                    <div className="message">
                        <p>PS : You can still leave a message along with your details if you want to get in touch
                             regarding your personal projects or any sort of help.
                    </p>
                    </div>
                    <div className="form-section">
                        <form id="formRef" hidden={this.state.isFormDisabled} className="form-details"  >
                            <div className="basic-details">
                                <div className="form-control">
                                    <div> <AccountCircle classes={{root: classes.accountIcon}} /> </div>
                                    <TextField 
                                        label="Name"
                                        name="name"
                                        value = {this.state.name}
                                        onChange={this.handleInput}
                                        InputProps={{
                                            className: classes.textField
                                    }}/>
                                </div>
                                <div className="form-control">
                                    <div><CallIcon  classes={{root:classes.callIcon}} /></div>
                                    <div><TextField type="number" 
                                        label="Contact Number"
                                        name="contactNumber"
                                        onChange={this.handleInput}
                                        value = {this.state.contactNumber}
                                        InputProps={{
                                            className: classes.textField
                                }}/></div>

                                </div>
                            </div>
                           
                            <div className="form-control-textarea">
                                <textarea  placeholder={"Leave a message"} name={"message"} value = {this.state.message} onChange={this.handleTextArea}></textarea>
                            </div>
                            <div hidden = {this.state.isButtonDisabled}>
                                <Button  disabled={this.state.name == "" ? true : false}  variant="outlined"
                                className={classes.margin}  onClick={this.haandleFormSubmit}>
                                    Send To Akshat
                                </Button>
                            </div>
                            <div  hidden= {!this.state.isButtonDisabled}>
                                <CircularProgress/>
                            </div>
                        </form>
                    </div>

                    <div className="thankyou-message" hidden = {!this.state.isFormDisabled}>
                        Thankyou For reaching me !
                        <div className="another-message">
                            To drop another message please click below.
                            <div className="another-button">
                            <Button  size="small" variant="outlined" color="primary" onClick={this.sendAnotherMessage}>Drop Another Message</Button>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

        )

    }

}

export default withStyles(styles, { withTheme: true })(ContactComponent);