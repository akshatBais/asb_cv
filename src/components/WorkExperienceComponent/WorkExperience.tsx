import React from 'react';
import workExperience from './work-exp';
import './WorkExperience.css'
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
                        <span>
                            Work
                    </span>
                        <span>
                            Experience
                    </span>
                    </div>

                </div>
            </section>

        )
    }

}

export default WorkExperience;