import React from 'react';
import axios from 'axios';
import { Checkbox } from '@material-ui/core';

interface todoItems {
    todoitems: [],
    done: boolean
}

class ToDoComponent extends React.Component<{}, todoItems> {

    constructor(props: any) {
        super(props);
        this.state = {
            todoitems: [],
            done: false
        };
        this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
    }
    checked: boolean = true;
    dynamicToDoItemArray: any = [];
    componentWillMount() {
        console.log("will mount");
        console.log(this.state)
        axios.get("http://localhost:8000/data/toDoDetails").then((res: any) => {
            console.log(res.data);
            this.setState({ todoitems: res.data[0].todoitems, done: true });
            console.log(this.state);
        });
    }

    // prepareToDoList() {
    //     this.state['todoitems'].forEach((element: any) => {
    //         this.dynamicToDoItemArray.push(<li>{element.task}</li>)
    //     })

    //     return this.dynamicToDoItemArray;
    // }

    handleCheckBoxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("handle check is called");
        console.log(event.target);
        (this.checked) ? this.checked = false : this.checked = true;
    }

    render() {
        console.log("inside render");
        if (!this.state.done) {
            return (
                <div>
                    Your To Do List is loading ....
                </div>
            )
        } else {
            console.log(this.state)
            return (

                <section id="todolist">
                    <div>
                        <ul>
                            {this.state.todoitems.map((value: any, index: any) => {
                                return <li key={index}>
                                    <Checkbox id={`${index}`} checked={this.checked}
                                        onChange={this.handleCheckBoxClick}></Checkbox>
                                    {value.task}</li>
                            })}
                        </ul>
                    </div>
                </section>

            )
        }

    }

}

export default ToDoComponent;

