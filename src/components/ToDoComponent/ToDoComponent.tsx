import React from 'react';
import axios from 'axios';
import { Checkbox, Button, CircularProgress } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import '../ToDoComponent/ToDoComponent.css';

interface todoItems {
    todoitems: [],
    done: boolean,
    checked: boolean[],
    isButtonClicked: boolean
}

class ToDoComponent extends React.Component<{}, todoItems> {

    constructor(props: any) {
        super(props);
        this.state = {
            todoitems: [],
            done: false,
            checked: [],
            isButtonClicked: true
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
    }

    componentWillMount() {
        console.log("will mount");
        console.log(this.state);
        axios.get("https://akshat-profile-node.herokuapp.com/data/toDoDetails").then((res: any) => {
            this.setState({
                todoitems: res.data[0].todoitems, done: true, checked: res.data[0].todoitems.map((item: any) => {
                    if (item.status == 0) return false; else return true;
                })
            });
            console.log("compoennt will mount");
        });
    }



    handleCheckBoxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("handle check is called");
        let list = this.state.checked;
        if (this.state.checked[parseInt(event.target.id)]) {
            list[parseInt(event.target.id)] = false;
            console.log("setting false")
        } else {
            list[parseInt(event.target.id)] = true;
            console.log("setting true")
        }
        this.setState({ checked: list });

    }

    componentWillUpdate() {
        console.log("component will update");
        // console.log(this.state)
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    handleButtonClick() {
        this.setState({ isButtonClicked: false });
    }

    render() {
        console.log("inside render");
        if (!this.state.done) {
            return (
                // <div>
                <CircularProgress />
            )
        } else {
            return (

                <div className="to-do-section">
                    <div hidden={!this.state.isButtonClicked} className='button-section'>
                        <Button onClick={this.handleButtonClick}><AddCircleIcon></AddCircleIcon> Create a Task</Button>
                    </div>
                    <div hidden={this.state.isButtonClicked} className='add-task-box'>
                        <textarea placeholder="Add a Task"></textarea>
                    </div>
                    <div className='to-do-list'>
                        <ul>
                            {this.state.todoitems.map((value: any, index: any) => {
                                return <li key={index}>
                                    <Checkbox id={`${index}`} checked={this.state.checked[index] ? true : false}
                                        onChange={this.handleCheckBoxClick}></Checkbox>
                                    {value.task}</li>
                            })}
                        </ul>
                    </div>

                </div>
                // </section>

            )
        }

    }

}

export default ToDoComponent;

