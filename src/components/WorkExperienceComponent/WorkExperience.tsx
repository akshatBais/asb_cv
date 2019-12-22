import React from 'react';
import workExperience from './work-exp';
import './WorkExperience.css'
import { CircularProgress } from '@material-ui/core';
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
            <section id="experience">
                <div className="work-experience">
                    <div>
                        {/* <span> */}
                           <CircularProgress />
                           <br />
                           Under construction
                    {/* </span> */}
                        {/* <span>
                               Under construction
                    </span> */}
                    </div>

                </div>
            </section>

        )
    }

}

export default WorkExperience;