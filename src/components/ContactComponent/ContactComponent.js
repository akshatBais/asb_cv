import React, { FormEventHandler } from 'react';
import '../ContactComponent/ContactComponent.css'
import { Divider, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';
import {httpcall} from '../common';

const styles = theme => ({
    margin : {
        margin : theme.spacing(1)
    }
})
// let dissableSubmitButton = true;

class ContactComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            contactNumber: 0,
            message : "",
            isFormDisabled : false
        };
        
        this.haandleFormSubmit = this.haandleFormSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
        this.sendAnotherMessage = this.sendAnotherMessage.bind(this);
    }

    sendAnotherMessage() {
        this.setState({ isFormDisabled : false     })
    }
    // event: React.FormEvent<HTMLFormElement>
    haandleFormSubmit() {
        // event.preventDefault();https://akshat-profile-node.herokuapp.com
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
                        <p><i>If you like my profile and think my skills can be leveraged for your project and requirements.
                        Kindly fill your information and leave a message. Thanks !!</i></p>
                    </div>
                    <div className="message">
                        <p>PS : You can still leave a message along with your details if you want to get in touch
                             regarding your personal projects or any sort of help. Happy development guys !
                    </p>
                    </div>
                    {/* onSubmit={this.haandleFormSubmit} */}
                    <form id="formRef" hidden={this.state.isFormDisabled} className="form-details"  >
                        <div className="form-control">
                            <input title={"Full Name"} name={"name"} value={this.state.name} placeholder={"Enter Your Name"} onChange={this.handleInput} />
                        </div>
                        <div className="form-control">
                            <input type="number" name={"contactNumber"} value={this.state.contactNumber === 0 ? "" : this.state.contactNumber} placeholder={"Contact number"} onChange={this.handleInput} />
                            <CallIcon />
                        </div>
                        <div className="form-control-textarea">
                            <textarea  placeholder={"Leave a message"} name={"message"} value = {this.state.message} onChange={this.handleTextArea}></textarea>
                        </div>
                        <Button disabled={this.state.name == "" ? true : false}  variant="outlined" color="primary"  className={classes.margin}  onClick={this.haandleFormSubmit}>
                            Send To Akshat
                        </Button>
                        {/* <button className = "send-data">Send Data</button> */}
                    </form>
                    <div className="thankyou-message" hidden = {!this.state.isFormDisabled}>
                        Thankyou For your reaching me !
                        <div>
                            To drop another message please click below.
                            <div>
                            <Button size="small" variant="outlined" color="primary" onClick={this.sendAnotherMessage}>Drop Another Message</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )

    }

}

export default withStyles(styles, { withTheme: true })(ContactComponent);