import React from 'react';
import workExperience from './work-exp';
import './WorkExperience.css'
import { CircularProgress, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


class WorkExperience extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        this.setState(workExperience);
        console.log(this.state)

    }

    render() {

        var companies = [];
        // companies = this.state.companies;

        return (
            <section id="experience" className="experience">
                <Box display="flex" flexWrap="wrap" bgcolor="backgroumd.paper" justifyContent="space-between">
                    <Box>
                        <CircularProgress />This section is in Progress..
                    </Box>
                    <Box>
                        .
                    </Box>
                </Box>
            </section>
        )
    }
}

export default WorkExperience;