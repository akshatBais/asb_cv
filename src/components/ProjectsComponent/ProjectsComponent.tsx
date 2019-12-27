import React from 'react';
import '../ProjectsComponent/ProjectsComponent.css'
import ToDoComponent from '../ToDoComponent/ToDoComponent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

interface stateInterface {
    isDialogVisible: boolean
}
// var hello : Number;
class ProjectsComponent extends React.Component<{}, stateInterface> {

    constructor(props: any) {
        super(props);
        this.state = {
            isDialogVisible: false
        }
        // hello = "hey";

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    handleClickOpen() {
        this.setState({ isDialogVisible: true });
    }

    handleDialogClose() {
        this.setState({ isDialogVisible: false });
    }


    render() {
        return (
            <section id="projects">
                <div className="projects-section">
                    In Progress
                    <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>TO DO APP</Button>
                    <Dialog open={this.state.isDialogVisible} onClose={this.handleDialogClose} aria-labelledby="simple-dialog-title">
                    {/* <div draggable={true} className="to-do-app"> */}
                        <ToDoComponent />
                    {/* </div> */}
                    </Dialog>
                </div>
            </section>
        )

    }


}

export default ProjectsComponent;