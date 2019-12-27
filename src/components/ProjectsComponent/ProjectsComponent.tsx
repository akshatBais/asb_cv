import React from 'react';
import '../ProjectsComponent/ProjectsComponent.css'
import ToDoComponent from '../ToDoComponent/ToDoComponent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';

interface stateInterface {
    isDialogVisible: boolean
}

const useStyles = makeStyles({
    root: {
        minWidth: '300px'
    }
});


class ProjectsComponent extends React.Component<{}, stateInterface> {

    constructor(props: any) {
        super(props);
        this.state = {
            isDialogVisible: false
        }
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
        // const classes = useStyles();
        return (
            <section id="projects">
                <div className="projects-section">
                    In Progress
                    <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>TO DO APP</Button>
                    <Dialog open={this.state.isDialogVisible} onClose={this.handleDialogClose} aria-labelledby="simple-dialog-title">
                        <ToDoComponent />
                    </Dialog>
                </div>
            </section>
        )

    }


}

export default ProjectsComponent;