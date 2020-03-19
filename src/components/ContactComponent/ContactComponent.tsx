import React from 'react';
import '../ContactComponent/ContactComponent.css'
import { Divider } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';

interface ContactInformation {
    name: string,
    contactNumber: number,
    InstitutionName: string
}

class ContactComponent extends React.Component<{}, ContactInformation> {


    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            contactNumber: 0,
            InstitutionName: "",
        }

        this.haandleFormSubmit = this.haandleFormSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    haandleFormSubmit() {
        console.log("submit button called")
    }

    handleInput(e: React.FormEvent<HTMLInputElement>) {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;
        this.setState({
            ...this.state,
            [name]: value
        });

    }


    render() {
        console.log(this.state)
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

                    <form className="form-details" onSubmit={this.haandleFormSubmit} >
                        <div className="form-control">
                            <input title={"Full Name"} name={"name"} value={this.state.name} placeholder={"Please Enter Your Name"} onChange={this.handleInput} />
                        </div>
                        <div className="form-control">
                            <CallIcon />
                            <input type="number" name={"contactNumber"} value={this.state.contactNumber == 0 ? "" : this.state.contactNumber} placeholder={"Please Enter Your Contact number"} onChange={this.handleInput} />
                        </div>
                        <div className="form-control-textarea">
                            <textarea placeholder={"Leave a message"}></textarea>
                        </div>

                    </form>
                </div>
            </section>

        )

    }

}

export default ContactComponent;